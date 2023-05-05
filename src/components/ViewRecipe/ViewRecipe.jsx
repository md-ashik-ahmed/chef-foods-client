import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData,} from 'react-router-dom';

const ViewRecipe = () => {
    const [accept, setAccept] = useState(true);
    const [accepts, setAccepts] = useState(true);
    const [accepted, setAccepted] = useState(true);
    // const {id} = useParams();

    const chef = useLoaderData()

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/foods/${id}`)
    //     .then((res) => res.json())
    //     .then((data) => console.log(data))

    // },[])

   const handleFavoute1 =(event) =>{
    setAccept(event.target.checked)
    toast("added Successfully !")
   }
   const handleFavoute2 =(event) =>{
    setAccepts(event.target.checked)
    toast("added Successfully !")
   }
   const handleFavoute3 =(event) =>{
    setAccepted(event.target.checked)
    toast("added Successfully !")
   }


    return (
        <div className='bg-sky-50'>
           <div className='border my-container gap-3 bg-sky-100 px-5 py-6 justify-between rounded-md items-center'>
            <div className='lg:inline-flex items-center gap-10'>
                <div className='w-1/2 transition duration-200 transform hover:-translate-y-2'>
                   <div className='flex'> <img className='border bg-slate-50' src={chef.picture} alt="image" /></div>
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
      <div className='grid lg:grid-cols-3 gap-4'> <div className="card-body card bg-purple-100	 shadow-xl transition duration-200 transform hover:-translate-y-2">
        <div className='flex justify-between'><h2 className="card-title text-2xl">{chef.recipes[0].recipe_name}
        </h2> <button onClick={handleFavoute1} disabled={!accept}  className='btn btn-info'>Favorite</button>
          </div>
          <hr />
          <h2 className='text-xl'><span className='font-semibold'>Ingredients
          </span> : {chef.recipes[0].ingredients}</h2>
          <h2 className='text-xl'><span className='font-semibold'>Cooking Method</span>  : {chef.recipes[0].cooking_method}</h2>
          <h2 className='text-xl'><span className='font-semibold'>Rating 
          </span>: {chef.recipes[0].rating}</h2>
      </div>


      <div className='card '> <div className="card-body card bg-purple-100	 shadow-xl transition duration-200 transform hover:-translate-y-2">
         <div className='flex justify-between'>
            
        <h2 className="card-title text-2xl">{chef.recipes[1].recipe_name}
        </h2> 
        <button onClick={handleFavoute2} disabled={!accepts}  className='btn btn-info'>Favorite</button></div>
          <hr />

          
        <h2 className='text-xl'><span className='font-semibold'>Ingredients</span>  : {chef.recipes[1].ingredients}</h2>
        <h2 className='text-xl'><span className='font-semibold'>Cooking Method</span> : {chef.recipes[1].cooking_method}</h2>
        <h2 className='text-xl'><span className='font-semibold'>Rating </span> : {chef.recipes[1].rating}</h2>
        </div>



      </div>
       <div className="card-body card shadow-xl bg-purple-100 transition duration-200 transform hover:-translate-y-2">
         <div className='flex justify-between'><h2 className="card-title text-2xl">{chef.recipes[2].recipe_name}
        </h2> <button onClick={handleFavoute3} disabled={!accepted}  className='btn btn-info'>Favorite</button>
          </div>

          <hr />

          <h2 className='text-xl'><span className='font-semibold'>Ingredients</span>  : {chef.recipes[2].ingredients}</h2>
          <h2 className='text-xl'><span className='font-semibold'>Cooking Method</span>  : {chef.recipes[2].cooking_method}</h2>
          <h2 className='text-xl'><span className='font-semibold'>Rating </span>: {chef.recipes[2].rating}</h2>
      </div>
      </div>
 
      </div>
         <ToastContainer/>
        </div>  
        
    );
};

export default ViewRecipe;