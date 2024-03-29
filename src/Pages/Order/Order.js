import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Order = () => {
     const {user} = useContext(AuthContext)
     const [orders, setOrders] = useState()
     useEffect(()=>{
          fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
              authorization: `Bearer ${localStorage.getItem('geniusToken')}`
            }
          })
          .then(res=>res.json())
          .then(data=>setOrders(data))

     },[user?.email])

     const handleDelete = id =>{
  
          const proceed = window.confirm('Are you sure you cancel this order!')
          if(proceed){
            fetch(`http://localhost:5000/orders/${id}`, {
              method: 'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
              console.log(data)
              if(data.deletedCount > 0 ){
                alert('Deleted successfully!! ')
                const remaining = orders.filter(ord=>ord._id !== id)
                setOrders(remaining)
              }
            })
          }
         }

        const handleStatusUpdate = id => {
          fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Approved'})
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0 ){
              const remaining = orders.filter(odr=> odr._id !== id)
              const approving = orders.find(odr=> odr._id === id)
              approving.status = 'Approved'
              const newOrders = [approving, ...remaining];
              setOrders(newOrders)
            }
          })
        }


     return (
          <div>
               <h2>Order: {orders?.length}</h2>
               <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Message</th>
      </tr>
    </thead>
    <tbody>
     {
          orders?.map(order=><OrderRow
          key={order._id}
          order={order}
          handleDelete={handleDelete}
          handleStatusUpdate={handleStatusUpdate}
          ></OrderRow>)
     }
    </tbody>
  </table>
</div>
               
          </div>
     );
};

export default Order;