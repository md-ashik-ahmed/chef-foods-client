import React, { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';


const Login = () => {

  const [error, setError] = useState('')

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

 

  const from = location.state?.from?.pathname || '/';

  const auth = getAuth(app)
  console.log(app)
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()

  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, googleProvider )
    .then(result =>{
      const user = result.user;
      console.log(user)
      navigate(from, {replace : true});
    })
    .catch(error =>{
      console.log('error', error.message)
    })
  }

  const handleGithubSignIn = () =>{
    signInWithPopup(auth, githubProvider )
    .then(result =>{
      const user = result.user;
      console.log(user)
      navigate(from, {replace : true});
    })
    .catch(error =>{
      console.log('error', error.message)
    })
  }


  const {signIn} = useContext(AuthContext)

    const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        
        signIn(email, password)
        .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser)
          setError('')
          form.reset()
          
          navigate(from, {replace : true});
        })
        .catch(error =>{
          console.log(error.code);

        if(error.code = "auth/wrong-password"){
          setError('Wrong Password !')
        }
        else if(error.code = "auth/user-not-found"){
          setError('Wrong Email !')
        }
        });
        
    };

   
    return (
    <>
    <div className="min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
      <label className="label cursor-pointer">
       <span className="label-text">Remember me</span> 
      <input type="checkbox" className="checkbox" />
     </label>
       </div>
       <p className='text-red-600'>{error}</p>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      <div className='flex'> <p>Don't have an account?</p> 
      <Link to='/register'> <p className='text-blue-600'>Please Register</p> 
      </Link></div>
        <div className='justify-around flex mt-4 gap-10'>
        <button onClick={handleGoogleSignIn} className="btn btn-outline ">
          <div className='flex'><p><FaGoogle/></p> <p className='pl-2'>Google
          </p></div></button> <br /> <br />
        <button onClick={handleGithubSignIn} className="btn btn-outline ">
          <div className='flex'><p><FaGithub/></p> <p className='pl-2'>Github
          </p></div></button>
        </div>
      </form>
    </div>
  </div>
 </div>
 </>
    );
};

export default Login;