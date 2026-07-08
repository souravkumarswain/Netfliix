import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = (props) => {
  const {signIn} = props;
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid,email,displayName} = user;
    dispatch(addUser({uid:uid,email:email,displayName:displayName}))
    navigate('/browse')  
  } else {
    dispatch(removeUser())
    navigate('/')
  }
});
},[])

  const onClickButton = () => {
    signOut(auth).then(() => {
  // Sign-out successful.
   
}).catch((error) => {
  // An error happened.
});
  }
  return (
    <div className='flex justify-between items-center absolute right-0 left-0 top-0 w-8/12 mx-auto'>
      <div className='bg-slate-900 opacity-80 rounded'>
        <img className="w-44"src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='product-logo'/>
      </div>
      <button onClick = {onClickButton}className=' mr-4 bg-red-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer'>{signIn ? 'Sign In' : 'Sign Out'}</button>
    </div>
  )
}

export default Header