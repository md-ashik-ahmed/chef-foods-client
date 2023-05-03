import React from 'react';

const Blogs = () => {
    return (
        <div className='my-container'>
            <div>
                <h1 className='font-sans text-2xl font-semibold'>1. what is the difference between uncontrolled and controlled components?</h1> <br />
                <h3 className='text-xl'> <span className='font-semibold'>Answer:</span> A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component". <br /> <br />

                A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.
                </h3> <br /> <br />

                <h1 className='font-sans text-2xl font-semibold'>2. How to validate React props using PropTypes?</h1> <br />
                <h3 className='text-xl'><span className='font-semibold'>Answer:</span> A custom hook, whose name begins with the word "use," is a unique JavaScript function that can be used to call other hooks. Here are some key distinctions between React JS components and custom React hooks: A unique signature is not necessary for a bespoke hook.</h3> <br /> <br />

                <h1 className='font-sans text-2xl font-semibold'>3. what is the difference between node js and express js?</h1><br />
                <h3 className='text-xl'><span className='font-semibold'>Answer:</span> The built-in React hook useRef(initialValue) receives one argument as the initial value and returns a reference (also known as a ref). An object with the unique property current is referred to as a reference.</h3> <br /> <br />

                <h1 className='font-sans text-2xl font-semibold'>4. What is a custom hook, and why will you create a custom hook?</h1><br />
                <h3 className='text-xl'><span className='font-semibold'>Answer:</span> A resource-intensive function that has been provided to useMemo() will have its value memoized. By getting rid of tedious, repetitive computations, it helps a React component perform as well as possible.</h3>

            </div>
        </div>
    );
};

export default Blogs;