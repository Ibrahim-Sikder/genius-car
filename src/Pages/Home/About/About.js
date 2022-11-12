import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg' ;
const About = () => {
    return (
<div>
    <div className="hero">
        <div className="hero-content flex-col lg:flex-row ">
        <div className='w-1/2 relative'>
            <img className='w-full h-full' src={person} alt="img" />
            <img className='w-3/5 absolute left-32 top-20 ' src={parts} alt="img" />
        </div>
        <div classNam="w-1/2">
            <h1 className="text-4xl font-bold w-full">
            We are qualified & of <br />
            experience in this <br />
            field</h1>
            <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <button className="btn btn-primary">Get more info</button>
        </div>
        </div>
    </div>
        </div>
    );
};

export default About;