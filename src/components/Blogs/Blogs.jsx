import React from 'react';

const Blogs = () => {
    return (
        <div className='my-container'>
            <div>
                <h1 className='font-sans text-2xl font-semibold'>1. When should you use context API?</h1> <br />
                <h3 className='text-xl'> <span className='font-semibold'>Answer:</span> When a large number of components at various nesting levels require access to a single piece of data, context is usually used. It makes component reuse more challenging, so use it carefully. Component composition is frequently a more straightforward option than context if all you want to do is avoid passing some props through a lot of layers.</h3> <br /> <br />

                <h1 className='font-sans text-2xl font-semibold'>2. What is a custom hook?</h1> <br />
                <h3 className='text-xl'><span className='font-semibold'>Answer:</span> A custom hook, whose name begins with the word "use," is a unique JavaScript function that can be used to call other hooks. Here are some key distinctions between React JS components and custom React hooks: A unique signature is not necessary for a bespoke hook.</h3> <br /> <br />

                <h1 className='font-sans text-2xl font-semibold'>3. What is useRef?</h1><br />
                <h3 className='text-xl'><span className='font-semibold'>Answer:</span> The built-in React hook useRef(initialValue) receives one argument as the initial value and returns a reference (also known as a ref). An object with the unique property current is referred to as a reference.</h3> <br /> <br />

                <h1 className='font-sans text-2xl font-semibold'>4. What is useMemo?</h1><br />
                <h3 className='text-xl'><span className='font-semibold'>Answer:</span> A resource-intensive function that has been provided to useMemo() will have its value memoized. By getting rid of tedious, repetitive computations, it helps a React component perform as well as possible.</h3>

            </div>
        </div>
    );
};

export default Blogs;