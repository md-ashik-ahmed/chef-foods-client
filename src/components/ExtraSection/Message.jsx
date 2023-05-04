import React from 'react';

const Message = () => {
    return (
        <div className=' grid lg:grid-cols-2 items-center mx-auto lg:pl-20 gap-20'>
            <div className=' card'>
                <h1 className='font-sans font-bold text-5xl pb-8'>Chef Messags</h1>
                <p className='text-xl'>A barbecue grill is a device that cooks food by applying heat from below. There are several varieties of grills, with most falling into one There are several varieties of grills There are several varieties of grills of two categories charcoal. There is debate over which method yields superior results A barbecue grill is a device that cooks food by applying heat from below. e that cooks food by applying heat from below.</p>

                <div className='mt-16'>
                <button className="btn ml-16 btn-outline btn-primary px-4 transition duration-200 transform hover:-translate-y-2 ">Find Our Story</button></div>
                </div> 
                
                <div className='w-1/2 '> <img className='h-full w-full' 
                src="https://i.ibb.co/CK2g6Kk/chef2.png" alt="image" /></div>
              
        </div>
    );
};

export default Message;