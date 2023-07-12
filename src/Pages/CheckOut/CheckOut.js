import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
 const {_id, title, price} = useLoaderData()
 const {user} = useContext(AuthContext)
  
    const handlePlaceOrder = (event)=>{
        event.preventDefault()
        const form = event.target;
        const name = `${form.firstName.value} & ${form.lastName.value}`;
        const email = form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer:name,
            email,
            phone,
            message
        }

        fetch('http://localhost:5000/orders', {
            method:'POST',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                alert('Order placed successfully ')
            console.log(data)
            form.reset()
            }
        })
        .catch(err=>console.log(err))
    }
 

        
    return (
       <form onSubmit={handlePlaceOrder} className='mt-20 mb-20'>
        <h2 className="text-4xl">You are about to order: {title}</h2>
        <h2 className='text-3xl'>Price :{price}  </h2>
             <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <input type="text" placeholder="First name" name="firstName" className="input input-bordered w-full " />
            <input type="text" placeholder="Last name" name="lastName" className="input input-bordered w-full " />
            <input type="email" placeholder="Email" name="email" className="input input-bordered w-full " required />
            <input type="number" placeholder="Phone " name="phone" className="input input-bordered w-full" required />
           
        </div>
        <textarea name="message" className="textarea w-full textarea-bordered h-24" placeholder="Your message "></textarea>
        <input type="submit" value="Place your order " className='btn' />
        
       </form>
       
    );
};

export default CheckOut;