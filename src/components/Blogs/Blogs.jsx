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
                <h3 className='text-xl'><span className='font-semibold'>Answer:</span> You may verify the props supplied to a component using the PropTypes library that React offers. PropTypes makes it easier to verify that the props are the right type and offers better error messages when they aren't.</h3> <br /> <br />

                <h1 className='font-sans text-2xl font-semibold'>3. What is the difference between node js and express js?</h1><br />
                <h3 className='text-xl'><span className='font-semibold'>Answer:</span> Node.js is a JavaScript runtime built on the Chrome V8 JavaScript engine. It provides an environment for executing JavaScript code outside of a web browser, allowing developers to build server-side applications using JavaScript. <br /> <br />

                Express.js, on the other hand, is a framework for building web applications on top of Node.js. It provides a set of features for building web applications such as routing, middleware, templates, and more.</h3> <br /> <br />

                <h1 className='font-sans text-2xl font-semibold'>4. What is a custom hook, and why will you create a custom hook?</h1><br />
                <h3 className='text-xl'><span className='font-semibold'>Answer:</span> In a React application, a custom hook is a reusable function that can be shared by several components and contains stateful functionality. Custom hooks can call other hooks, including other custom hooks, and they include the prefix "use" in their names. <br /> <br />

                Custom hooks are made by developers to increase code reuse and to contain intricate or repeated logic in a single function. By doing this, code may be reused across several components without having to write duplicate code, making it more modular and simpler to maintain.</h3>

            </div>
        </div>
    );
};

export default Blogs;