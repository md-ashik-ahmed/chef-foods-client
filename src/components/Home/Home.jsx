import React, { useContext, useEffect, useState } from 'react';
import Card from '../Card/Card';
import { AuthContext } from '../Provider/AuthProvider';
import Banner from '../Banner/Banner';


const Home = () => {

  const user = useContext(AuthContext);

  const [foods, setFoods] = useState([]);

  useEffect(() =>{
    fetch('https://chef-foods-server-md-ashik-ahmed.vercel.app/foods')
    .then(res => res.json())
    .then(data => setFoods(data))
    .catch(error => console.error(error))

  },[])

    return (

        <div ><Banner></Banner>
          <div className='my-container'>
       <div className='grid lg:grid-cols-3 gap-4'>
         {foods.map((foods) =>(
          <Card foods={foods}
          key={foods.id}></Card>
         ))}
       </div></div>
     </div>
    );
};

export default Home;