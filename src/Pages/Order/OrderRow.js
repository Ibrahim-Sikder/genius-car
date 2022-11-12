import React, { useEffect, useState } from 'react';

const OrderRow = ({order, handleDelete, handleStatusUpdate}) => {
    const {_id, serviceName,phone, message,customer,service, price, email, status} = order ;
    const [orderService, setOrderService] = useState({});

    useEffect(()=>{
        fetch( `http://localhost:5000/services/${service}`)
        .then(res=>res.json())
        .then(data=>setOrderService(data))
    },[service])

 
    return (
        
       <div>
             <tr>
          <th>
          <label onClick={()=>handleDelete(_id)}>
          <button className='btn btn-ghost'>X</button>
          </label>
             
          </th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="rounded w-24 h-24">
                 {
                     orderService?.img &&
                     <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                 }
                </div>
              </div>
              <div>
                <div className="font-bold">{customer}</div>
                <div className="text-sm opacity-50">{phone}</div>
              </div>
            </div>
          </td>
          <td>
            Zemlak, Daniel and Leannon
            <br/>
            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
          </td>
          <td>Purple</td>
          <th>
            <button
            onClick={()=>handleStatusUpdate(_id)}
             className="btn btn-ghost btn-xs">{status ? status : "Pending" }</button>
          </th>
        </tr>
        
       
  
       </div>
      
        
    );
};

export default OrderRow;