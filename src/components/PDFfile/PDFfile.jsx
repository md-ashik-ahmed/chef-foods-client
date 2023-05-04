import React, { useRef } from 'react';
import ReactPrint from 'react-to-print';
import Blogs from '../Blogs/Blogs';

const PDFfile = () => {

    const ref = useRef()

    return (
        <div className='bg-sky-100'>
            <div ref={ref}>
                <Blogs></Blogs>
            </div>
           <div className='text-center pb-6'> <ReactPrint trigger={() => <button className='btn btn-outline btn-primary px-16'>Print</button>} content={() => ref.current}/></div>
        </div>
    );
};

export default PDFfile;