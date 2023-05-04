import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {

    const {id,picture, name, experience,recipes_count, likes} = props.foods

    return (
        <div>  <div className="card w-full h-full bg-base-100 shadow-lg transition duration-200 transform hover:-translate-y-2">
       <div className='overflow-hidden relative  rounded shadow-lg hover:shadow-2xl'><figure ><img className='h-96 w-96' src={picture} alt="image" /></figure></div>
      <div className="card-body">
      <p>Recipes :{recipes_count}</p>
       <p>
       
       {likes}</p>
       <div className='bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-white absolute inset-x-0 top-0 h-96 transition-opacity duration-200 flex flex-col rounded-md'>
       <h2 className="card-title">{name}</h2>
       <p>Experience :{experience}</p>
       
      </div>
      <div className="card-actions justify-end">
      <Link to ={`/foods/${id}`}><button className='btn btn-outline btn-primary ' > View Recipe</button></Link> 
      </div>
      </div>
       </div> </div> 
    );
};

export default Card;