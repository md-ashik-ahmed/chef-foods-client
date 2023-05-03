import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewRecipe = () => {


    const {id} = useParams();

    const chef = useLoaderData()

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/foods/${id}`)
    //     .then((res) => res.json())
    //     .then((data) => console.log(data))

    // },[])


    return (
        <div>
           <div className='border my-container  px-5 py-6 justify-between rounded-md items-center'>
            <div className='lg:inline-flex items-center gap-10'>
                <div>
                    <img className='border bg-slate-50' src={chef.picture} alt="image" />
                </div>
                <div>
                    <h1 className='text-2xl font-medium py-2'>Name : {chef.name}</h1>
                    <h1 className='text-xl font-semibold pb-2'>Experience : {chef.experience} Years</h1>
                   <h2>Recipes : {chef.recipes_count}</h2>
                   <h2>Like : {chef.likes}</h2>
                   <h2>Description : {chef.bio}</h2>
                </div>
            </div>
        </div>
        <div className=" my-container my-16  ">
       
      <div className='grid lg:grid-cols-3 gap-4'> <div className="card-body card bg-base-100 shadow-xl">
          <h2 className="card-title">{chef.recipes[0].recipe_name}</h2>
          <hr />
          <h2>Ingredients : {chef.recipes[0].ingredients}</h2>
          <h2>Cooking Method : {chef.recipes[0].cooking_method}</h2>
          <h2>Rating : {chef.recipes[0].rating}</h2>
      </div>
      <div className='card '> <div className="card-body bg-base-100 shadow-xl">
          <h2 className="card-title">{chef.recipes[1].recipe_name}</h2>
          <hr />
          <h2>Ingredients : {chef.recipes[1].ingredients}</h2>
          <h2>Cooking Method : {chef.recipes[1].cooking_method}</h2>
          <h2>Rating : {chef.recipes[1].rating}</h2>
      </div></div>
       <div className="card-body bg-blue-400 shadow-xl">
          <h2 className="card-title">{chef.recipes[2].recipe_name}</h2>
          <hr />
          <h2>Ingredients : {chef.recipes[2].ingredients}</h2>
          <h2>Cooking Method : {chef.recipes[2].cooking_method}</h2>
          <h2>Rating : {chef.recipes[2].rating}</h2>
      </div></div>
 
    </div>

        </div>  
        
    );
};

export default ViewRecipe;