import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { current } from 'daisyui/src/colors';


const Login = () => {
  const {signIn, user} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then(result =>{
      const user = result.user;
      
      const currentUser = {
        email: user.email
      }
      console.log(currentUser)


      //jwt token
      fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
      })
      .then(res=>res.json())
      .then(data=>{
        localStorage.setItem('geniusToken', data.token)
        console.log(data)
        navigate(from, {replace: true})
      })



      
    })
    .catch(err=>console.log(err))
  }
 
   
    return (
        <div className="hero w-full ">
  <div className="hero-content flex-col lg:flex-row grid md:grid-cols-2">
    <div className="text-center lg:text-left">
        <img className='w-3/5 ' src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 text-center py-20">
    <h1 className="text-5xl font-bold">Please Login now!</h1>

      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
            
          
        </div>
      </form>
      <p className='text-red-800 font-bold text-center'>New to Genius Car <Link to="/signup">Acount</Link> </p>
     
    </div>
  </div>
</div>
    );
};

export default Login;