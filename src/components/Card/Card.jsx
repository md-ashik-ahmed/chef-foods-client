import React from 'react';

const Card = (props) => {

    const {picture, name, experience,recipes_count, likes} = props.foods

    return (
        <div className=''>  <div className="card w-96 bg-base-100 shadow-xl">
       <figure><img src={picture} alt="image" /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
       <div>
       <p>Experience :{experience}</p>
       <p>Recipes :{recipes_count}</p>
       <p>Likes :{likes}</p>
      </div>
      <div className="card-actions justify-center">
      <button className="btn btn-primary px-16">View Recipes</button>
      </div>
      </div>
       </div> </div> 
    );
};

export default Card;