import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {img, _id, title, price, description } = service;
    console.log(service)
    return (
        <div className="card card-compact w-50 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className='text-semibold text-red-700 text-2xl'>Price: {price}</p>
          <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}>
            <button className="btn btn-primary">Checkout </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;