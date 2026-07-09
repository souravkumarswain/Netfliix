import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO } from '../utils/constants';

const Header = (props) => {
  const { signIn } = props;
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    });
    return () => unSubscribe();
  }, [])

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
        <img className="w-44" src={NETFLIX_LOGO} alt='product-logo' />
      </div>
      <div className='flex items-center gap-4'>
        {user &&  <div className='flex items-center'>
          <img className="w-10" src={user?.photoURL} alt="ueser_profile_pic" />
          <p className='ml-2'>Welcome back <br/>{user?.displayName}</p>
        </div>}
        <button onClick={onClickButton} className=' mr-4 bg-red-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer'>{signIn ? 'Sign In' : 'Sign Out'}</button>
      </div>
    </div>
  )
}

export default Header