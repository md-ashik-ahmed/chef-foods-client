import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
  
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/QJs3YwG/1.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
        </div>
    );
};

export default Banner;