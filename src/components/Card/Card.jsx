import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {

    const {id,picture, name, experience,recipes_count, likes} = props.foods

    return (
        <div>  <div className="card w-96 bg-base-100 shadow-xl">
       <figure><img src={picture} alt="image" /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
       <div>
       <p>Experience :{experience}</p>
       <p>Recipes :{recipes_count}</p>
       <p>Likes :{likes}</p>
      </div>
      <div className="card-actions justify-center">
      <Link to ={`/foods/${id}`}><button className='btn btn-primary px-12' > View Recipe</button></Link> 
      </div>
      </div>
       </div> </div> 
    );
};

export default Card;