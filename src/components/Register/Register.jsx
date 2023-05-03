import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

  const [error, setError] = useState('');

  const {user, createUser} = useContext(AuthContext)
   
  const handleRegister = event =>{
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(name, email, password, confirm);

    if(password !== confirm){
      setError('Your password did not match')
      return
    }
    else if(password.length < 6 ){
      setError('password must be 6 character')
      return
    }

    

    createUser(email, password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
      form.reset();
    })
    .catch(error =>{
      console.log(error)
    })

}


    return (
        <div>
             <div className="min-h-screen bg-base-200">
   <div className="hero-content flex-col ">
    <div className="text-center ">
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" name="confirm" placeholder="Confirm Password" className="input input-bordered" required/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
      <label className="label cursor-pointer">
      <input type="checkbox" className="checkbox" />
       <span className="label-text">I accept <span className='text-blue-700'>Terms and Conditions</span> </span> 
      
     </label>
       </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Create an account</button>
        </div>
        <div className='inline-flex'><p>Already have an account?</p>
        <Link to='/login'> <p className='text-blue-600'>Login here</p> </Link></div>
        <p className='text-red-600'>{error}</p>
      </form>
    </div>
  </div>
 </div>
        </div>
    );
};

export default Register;