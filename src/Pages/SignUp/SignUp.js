import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import {useContext} from 'react';


const SignUp = () => {
const {createUser} = useContext(AuthContext)
    const handleSignUp = (event) =>{
        event.preventDefault()
        const form = event.target ;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result =>{
            const user = result.user ;
            console.log(user)

        })
        .catch(err=>{
            console.log(err)
        })
    }


    return (
        <div className="hero w-full ">
  <div className="hero-content flex-col lg:flex-row grid md:grid-cols-2">
    <div className="text-center lg:text-left">
        <img className='w-3/5 ' src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 text-center py-20">
    <h1 className="text-5xl font-bold">Sign Up!</h1>
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Sign Up" />
          
        </div>
      </form>
      <p className='text-red-800 font-bold text-center'>All ready have an account <Link to="/login">Login</Link> </p>
    </div>
  </div>
</div>
    );
};

export default SignUp;