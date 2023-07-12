import React from 'react';

const OrderRow = ({order, handleDelete, handleStatusUpdate}) => {
     const {serviceName,_id , price, email, customer, service, status} = order;

     
     return (
          <tr>
          <th>
            <label>
              <button onClick={()=>handleDelete(_id)} className='btn btn-ghost'>X</button>
            </label>
          </th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{serviceName}</div>
                <div className="text-sm opacity-50">{customer}</div>
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
            <button onClick={()=>handleStatusUpdate(_id)} className="btn btn-ghost btn-xs"> {status ? status : 'pending'}   </button>
          </th>
        </tr>
     );
};

export default OrderRow;