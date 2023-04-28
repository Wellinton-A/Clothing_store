import { useState } from 'react';

import Button from '../Button';
import SignUp from '../SignUp';
import FormImput from '../Form-input';
import { signInWithGooglePopup, signInAuthWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

import './sign-in.scss'

const formData = {
  email: '',
  password: ''
}

const SignIn = () => {
  const [ loginData, setLoginData ] = useState(formData);
  const { email, password } = loginData;


  const handleChage = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value
    })
  }

  const logGoogleUser = async () => {
  await signInWithGooglePopup();
  }

  const logIn = async (e) => {
    e.preventDefault()
    try {
      await signInAuthWithEmailAndPassword(email, password)
      setLoginData({email: '', password: ''})
    } catch(error) {
      if (error.code === 'auth/wrong-password') {
        alert('Wrong Password')
      } else {
        console.log('error', error.code)
      }
    }
  }

  return (
      <div className='authentication-container'>
        <div className='sign-in-container'>
          <h2>Already have an account?</h2>
          <span>Sign in with your email and password</span>
          <form onSubmit={logIn}>
          <FormImput required type='email' onChange={handleChage} name='email' value={email} label={'Email'} />
          <FormImput required type='password' onChange={handleChage} name='password' value={password} label={'Password'}/>
          <div className='buttons-container'>
            <Button type='submit'>Sign In</Button>
            <Button type='button' buttonType='google' onClick={logGoogleUser}>Sign In with Google</Button>
          </div>
          </form>
        </div>
        <SignUp />
      </div>
  )
}

export default SignIn