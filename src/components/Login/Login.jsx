import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';


const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || '/';

  const auth = getAuth(app)
  console.log(app)
  const provider = new GoogleAuthProvider()

  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, provider )
    .then(result =>{
      const user = result.user;
      console.log(user)
    })
    .catch(error =>{
      console.log('error', error.message)
    })
  }


  const {signIn} = useContext(AuthContext)


    const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        signIn(email, password)
        .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser)
          form.reset()
          navigate(from, {replace : true})
        })
        .catch(error =>{
          console.log(error)
        })

    }

   
    

    return (
    <>
    <div className="min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
      <label className="label cursor-pointer">
       <span className="label-text">Remember me</span> 
      <input type="checkbox" className="checkbox" />
     </label>
       </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <Link to='/register'> <p className='text-blue-600'>Register</p> </Link>
        <div className='item-center'>
        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success">login with Google</button> <br /> <br />
        <button className="btn btn-outline btn-success">
          login with github</button>
        </div>
      </form>
    </div>
  </div>
 </div>
 </>
    );
};

export default Login;