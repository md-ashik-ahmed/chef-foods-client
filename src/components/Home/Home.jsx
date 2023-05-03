import React, { useContext, useEffect, useState } from 'react';
import Card from '../Card/Card';
import { AuthContext } from '../Provider/AuthProvider';
import Banner from '../Banner/Banner';


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
         
       <div className='grid lg:grid-cols-3 gap-8'>
         {foods.map((foods) =>(
          <Card foods={foods}
          key={foods.id}></Card>
         ))}
       </div></div>
     </div>
    );
};

export default Home;