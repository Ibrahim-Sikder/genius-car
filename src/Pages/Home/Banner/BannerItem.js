import React from 'react';
import './BannerItem.css';
const BannerItem = ({slide}) => {
    const {image, id, prev, next } = slide ;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="carouselImg ">
        <img src={image} alt="" className='rounded-xl' />
        </div>
         <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
           <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
           <a href={`#slide${next}`} className="btn btn-circle">❯</a>
         </div>
         <div className="absolute flex justify-start  transform -translate-y-1/2 left-8 top-1/4">
          <h1 className="text-white font-bold text-5xl" >
             Afordable <br />
             Pricing For Car <br />
             Servicing 
          </h1>
         </div>
         <div className="absolute flex justify-start  transform -translate-y-1/2 left-8 top-1/2 w-2/5">
          <p className="text-white text-xl">
             There are many variations of passages of available but the majority have suffer alteration in some form
          </p>
         </div>
         <div className="absolute flex justify-start  transform -translate-y-1/2 left-8 top-3/4 w-2/5">
         <button className="btn btn-active btn-warning mr-5">Button</button>
         <button className="btn btn-outline btn-warning">Warning</button>
         </div>
       </div> 
    );
};

export default BannerItem;