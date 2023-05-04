import React from 'react';
import {  FaRegStar,  FaStar } from 'react-icons/fa';

import { FaRegHeart } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewRecipe = () => {


    // const {id} = useParams();

    const chef = useLoaderData()

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/foods/${id}`)
    //     .then((res) => res.json())
    //     .then((data) => console.log(data))

    // },[])

   


    return (
        <div className='bg-sky-100'>
           <div className='border my-container gap-3 bg-sky-200 px-5 py-6 justify-between rounded-md items-center'>
            <div className='lg:inline-flex items-center gap-10'>
                <div className='w-1/2 transition duration-200 transform hover:-translate-y-2'>
                    <img className='border bg-slate-50' src={chef.picture} alt="image" />
                </div>
                <div className='w-1/2 transition duration-200 transform hover:-translate-y-2'>
                    <h1 className='text-3xl font-semibold py-2'>{chef.name}</h1>
                    <h1 className='text-xl  pb-2'>Experience : {chef.experience} Years</h1>
                   <div className='flex pb-4'><h2 className='text-xl'>Recipes : {chef.recipes_count}</h2>
                   <h1 className='ml-12 text-xl'>Like : {chef.likes}</h1></div>
                   <h1 className=' text-xl'>{chef.bio}</h1>
                </div>
            </div> 
         </div>
        <div className=" my-container my-16">

           
       
      <div className='grid lg:grid-cols-3 gap-4'> <div className="card-body card bg-base-100 shadow-xl transition duration-200 transform hover:-translate-y-2">
          <div><h2 className="card-title text-2xl">{chef.recipes[0].recipe_name}</h2>
          </div>
          <hr />
          <h2 className='text-xl'><span className='font-semibold'>Ingredients
          </span> : {chef.recipes[0].ingredients}</h2>
          <h2 className='text-xl'><span className='font-semibold'>Cooking Method</span>  : {chef.recipes[0].cooking_method}</h2>
          <h2 className='text-xl'><span className='font-semibold'>Rating 
          </span>: {chef.recipes[0].rating}</h2>
      </div>
      <div className='card '> <div className="card-body card bg-base-100 shadow-xl transition duration-200 transform hover:-translate-y-2">
          <h2 className="card-title text-2xl">{chef.recipes[1].recipe_name}</h2>
          <hr />
          <h2 className='text-xl'><span className='font-semibold'>Ingredients</span>  : {chef.recipes[1].ingredients}</h2>
          <h2 className='text-xl'><span className='font-semibold'>Cooking Method</span> : {chef.recipes[1].cooking_method}</h2>
          <h2 className='text-xl'><span className='font-semibold'>Rating </span> : {chef.recipes[1].rating}</h2>
      </div></div>
       <div className="card-body card shadow-xl bg-base-100 transition duration-200 transform hover:-translate-y-2">
          <h2 className="card-title text-2xl">{chef.recipes[2].recipe_name}</h2>
          <hr />
          <h2 className='text-xl'><span className='font-semibold'>Ingredients</span>  : {chef.recipes[2].ingredients}</h2>
          <h2 className='text-xl'><span className='font-semibold'>Cooking Method</span>  : {chef.recipes[2].cooking_method}</h2>
          <h2 className='text-xl'><span className='font-semibold'>Rating </span>: {chef.recipes[2].rating}</h2>
          {/* <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={chef.recipes[2].rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                    <span> </span>
                </div> */}
      </div>
      </div>
 
    </div>

        </div>  
        
    );
};

export default ViewRecipe;