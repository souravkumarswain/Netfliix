import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO, SET_OF_LANG } from '../utils/constants';
import { toggleSearchMovies } from '../utils/GPTSlice';
import { addLangChange } from '../utils/langSlice';

const Header = (props) => {
  const { signIn } = props;
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)

  const showGPTPage = useSelector(store => store.gptData.showGptSearch)

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

  const onClickGPTSearch = () => {
    dispatch(toggleSearchMovies())
  }
  const onSelectLang = (e) => {
    dispatch(addLangChange(e.target.value))
  }
  return (
    <div className='flex justify-between items-center absolute right-0 left-0 top-0 w-full mx-auto bg-linear-to-b from-black text-white p-2'>
      <div className=' rounded ml-20'>
        <img className="w-44" src={NETFLIX_LOGO} alt='product-logo' />
      </div>
      <div className='flex items-center gap-4 mr-20'>
        {user &&  <div className='flex items-center'>
          <img className="w-10" src={user?.photoURL} alt="ueser_profile_pic" />
          <p className='ml-2'>Welcome back <br/>{user?.displayName}</p>
        </div>}
        {
          !signIn ? <button onClick = {onClickGPTSearch} className=' bg-purple-800 text-white font-bold py-2 px-4 rounded hover:cursor-pointer'>
            {showGPTPage ? 'Home Page' : 'GPT Search'}
          </button> : null
        }
        <button onClick={onClickButton} className=' mr-4 bg-red-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer'>{signIn ? 'Sign In' : 'Sign Out'}</button>
        {
          showGPTPage && <select className='text-white bg-red-700 px-2 py-2 rounded' onChange={onSelectLang}>
          {SET_OF_LANG.map(eachLang => <option value = {eachLang.value}>{eachLang.name}</option>)}
        </select>
        }
      </div>
    </div>
  )
}

export default Header