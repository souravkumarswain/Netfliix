import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const [errorMsg,setErrorMessage] = useState(null)
  const [signUpErr, setSignUpErr] = useState(null)
  const [userName, setUserName] = useState(null)
  const [userEmail,setUserEmail] = useState(null)
  const [userPass, setUserPass] = useState(null)

  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)

  const onToggleSignUp = () => {
    setIsSignIn(!isSignIn);
  }

  const onClickButton = () => {
    const errorResponse = validateData(email.current.value, password.current.value);
    setErrorMessage(errorResponse);
    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if(errorCode || errorMessage){
            setSignUpErr('Ahhh!! User is already registered')
          }
        })
    }
    else {
      //sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if(errorCode || errorMessage){
            setErrorMessage('Please try with valid login-id and password!!')
          }
        });
    }
  }

  return (
    <div className='relative'>
      <Header />
      <div className=''>
        <img className="" src="https://assets.nflxext.com/ffe/siteui/vlv3/81b52f88-dc76-488d-a939-0cf13a260a6e/web/IN-en-20260622-TRIFECTA-perspective_d39d60ef-cb5a-4793-9546-0a8d9a87948e_medium.jpg" alt="bg-pic" />
      </div>
      <form onSubmit={(e) =>e.preventDefault()} className='rounded-lg absolute flex flex-col py-12 px-4 bg-slate-900 text-white opacity-90 top-60 left-0 right-0 w-3/12 mx-auto'>
        <h1 className='text-3xl font-bold py-4'>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
        {
          !isSignIn && <input ref = {name} className='p-2 my-2 bg-gray-700 rounded' type='text' placeholder='Enter your name'></input>
        }
        <input
          ref={email}
          className='p-2 my-2 bg-gray-700 rounded'
          type='text'
          placeholder='Enter your email'>
        </input>
        <input
          ref={password}
          className='p-2 my-2 bg-gray-700 rounded'
          type='password'
          placeholder='Enter your password'>
        </input>
        <p className='text-red-700 font-bold'>{!isSignIn?signUpErr:errorMsg}</p>
        <button onClick={onClickButton} className='cursor-pointer bg-red-700 text-white font-bold my-4 p-3 rounded w-full'>{isSignIn ? 'Sign in' : 'Sign up'}</button>
        <h2 className='my-6'>{isSignIn ? 'New to Netflix?' : 'Already a user?'} <span onClick={onToggleSignUp} className='cursor-pointer hover:font-bold'>{isSignIn ? 'Sign Up' : 'Sign In'}</span> here. </h2>
      </form>
    </div>
  )
}

export default Login