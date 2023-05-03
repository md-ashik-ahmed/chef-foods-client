import React, { useContext, useEffect, useState } from 'react';
import Card from '../Card/Card';
import { AuthContext } from '../Provider/AuthProvider';


const Home = () => {

  const user = useContext(AuthContext);

  const [foods, setFoods] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:5000/foods')
    .then(res => res.json())
    .then(data => setFoods(data))
    .catch(error => console.error(error))

  },[])

    return (

        <div className='my-container'>
       <div className='grid lg:grid-cols-3 gap-4'>
         {foods.map((foods) =>(
          <Card foods={foods}
          key={foods.id}></Card>
         ))}
       </div>
     </div>
    );
};

export default Home;