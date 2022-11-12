import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Order = () => {
    const {user, logOut} = useContext(AuthContext);
    const [orders, setOrders] = useState([])

    useEffect(()=>{
    fetch(`http://localhost:5000/orders?email=${user?.email}`,{
        headers: {
            authorization: `Bearer ${localStorage.getItem('genius-token')}`
        }
    })
    .then(res=>{
        if(res.send === 401 || res.send === 403 ){
           return  logOut()
        }
        return  res.json()
    })
    .then(data=> setOrders(data))
    },[user?.email])


    const handleDelete =id => {
        const proceed = window.confirm('Are you sure you want to delete!! ')
        if(proceed){
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'

            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount > 0 ){
                    alert("Deleted successfully ");
                    const remaining = orders.filter(odr=>odr._id !== id);
                    setOrders(remaining)
                }
            })
        }
    }
    const handleStatusUpdate = id =>{
        fetch(`http://localhost:5000/orders/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0 ){
                const remaining = orders.filter(odr=> odr._id !== id);
                const approving = orders.find(odr=>odr._id == id)
                approving.status = 'Approved'

                const newOrders = [approving, ...remaining];
                setOrders(newOrders)
            }
        })
    }


    return (
        <div className='mt-20 mb-12'>
            <h2>Your order {orders.length}</h2>
            <div className="overflow-x-auto w-full">
        <div className="overflow-x-auto w-ful">
                <table className="table w-full">
                    
                <thead>
                    <tr>
                    <th>
                    <label>
                    <input type="checkbox" className="checkbox" />
                    </label>
                    </th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                    <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    orders.map(order=> <OrderRow
                    key={order._id}
                    order={order}
                    handleDelete={handleDelete}
                    handleStatusUpdate={handleStatusUpdate}
                    ></OrderRow> )
                    }
                </tbody>
            </table>
        </div>
</div>
        </div>
    );
};

export default Order;