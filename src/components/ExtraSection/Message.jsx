import React from 'react';

const Message = () => {
    return (
        <div className='flex items-center'>
            <div className='w-1/2'>
                <h1 className='font-sans font-bold text-6xl pb-8'>Chef Messags</h1>
                <p className='text-2xl'>A barbecue grill is a device that cooks food by applying heat from below. There are several varieties of grills, with most falling into one There are several varieties of grills There are several varieties of grills of two categories charcoal. There is debate over which method yields superior results A barbecue grill is a device that cooks food by applying heat from below. e that cooks food by applying heat from below.</p>

                <div className='mt-16'><button className="btn btn-outline btn-primary px-4">Our Story</button>
                <button className="btn ml-16 btn-outline btn-primary px-4">Find Our Story</button></div>
                </div>
               <div className='w-1/2'> <img className='h-full' src="https://i.ibb.co/CK2g6Kk/chef2.png" alt="image" /></div>
        </div>
    );
};

export default Message;