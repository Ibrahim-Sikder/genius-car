
import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';


const Services = () => {
    const [services, setServices ] = useState([]);
    const [isAsc, setIsAsc] =useState(true);
   useEffect(()=>{
    // fetch(`http://localhost:5000/services?order=${isAsc ? 'asc' : 'desc'}`)
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setServices(data))
   },[isAsc])
    return (
        <div>
            <div className='text-center'>
                
                <p className='text-2xl font-semibold text-red-500'>Services</p>
                <h2 className='text-5xl font-bold '>Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <button className='btn btn-primary' onClick={()=>setIsAsc(!isAsc)}>{isAsc ? 'desc' : 'asc'}</button>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    services.map(service=> 
                    <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;