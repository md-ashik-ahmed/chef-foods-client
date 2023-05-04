import React from 'react';
import { Link } from 'react-router-dom';


const Card = (props) => {

    const {id,picture, name, experience,recipes_count, likes, bio} = props.foods

    return (
        <div>  
        <div className="card w-full h-full bg-sky-200 shadow-lg transition duration-200 transform hover:-translate-y-2">
        <div className='overflow-hidden relative  rounded shadow-lg hover:shadow-2xl'>
        <figure ><img className='h-96 w-96' src={picture} alt="image"/>
         </figure></div>

          <div className="card-body">
            <div className='flex justify-around'><p className='text-xl pl-12'>Recipes :{recipes_count}</p>
           <p className='text-xl'>Like : {likes}</p></div>

             <div className='bg-black text-center px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-white absolute inset-x-0 top-0 h-96 transition-opacity duration-200 flex flex-col rounded-md'>
           <h2 className="pt-10 text-xl">{name}</h2>
            <p>Experience :{experience}</p>
            <p>{bio}</p></div>

          <div className="text-center mt-3">
         <Link to ={`/foods/${id}`}><button className='btn btn-outline btn-primary px-16 '> View Recipe</button> 
         </Link></div>
        </div>
       </div> 
       </div> 
    );
};

export default Card;