import React, { useContext, useEffect, useState } from 'react';
import Card from '../Card/Card';
import { AuthContext } from '../Provider/AuthProvider';
import Banner from '../Banner/Banner';
import Popular from '../ExtraSection/Popular';



const Home = () => {

  const user = useContext(AuthContext);

  const [foods, setFoods] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:5000/foods/')
    .then(res => res.json())
    .then(data => setFoods(data))
    .catch(error => console.error(error))

  },[])

    return (

        <div>
          <div className='px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'> <Banner></Banner></div>
         
          <div className='my-container'>
         <h1 className='font-sans font-bold text-6xl text-center pb-16'>Meet Our Chef's</h1>
       <div className='grid lg:grid-cols-3 gap-8'>
         {foods.map((foods) =>(
          <Card foods={foods}
          key={foods.id}></Card>
         ))}
       </div></div>
       <div className='my-container '>
        <h1 className='font-sans font-bold text-6xl text-center pb-16'>Our Popular Dishes</h1>
        <Popular></Popular></div>
     </div>
    );
};

export default Home;