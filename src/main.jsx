import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main.jsx';

import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import Home from './components/Home/Home.jsx';
import AuthProvider from './components/Provider/AuthProvider.jsx';
import ViewRecipe from './components/ViewRecipe/ViewRecipe.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement : <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children:[
      
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "/login",
        element : <Login></Login>
      },
      {
        path : "/register",
        element : <Register></Register>
      },
      {
        path : "/blogs",
        element : <Blogs></Blogs>
      },
      {
        path : "/foods/:id",
        element : <ViewRecipe></ViewRecipe>,
        loader : ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
