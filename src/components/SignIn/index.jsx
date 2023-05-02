import { useState } from 'react';

import Button, { BUTTON_TYPE } from '../Button';
import SignUp from '../SignUp';
import FormImput from '../Form-input';
import { signInWithGooglePopup, signInAuthWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

import './sign-in.js'
import { AuthenticationContainer, ButtonsContainer, SignInContainer } from './sign-in.js';

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
      <AuthenticationContainer>
        <SignInContainer>
          <h2>Already have an account?</h2>
          <span>Sign in with your email and password</span>
          <form onSubmit={logIn}>
          <FormImput required type='email' onChange={handleChage} name='email' value={email} label={'Email'} />
          <FormImput required type='password' onChange={handleChage} name='password' value={password} label={'Password'}/>
          <ButtonsContainer>
            <Button type='submit'>Sign In</Button>
            <Button type='button' buttonType={BUTTON_TYPE.google} onClick={logGoogleUser}>Sign In with Google</Button>
          </ButtonsContainer>
          </form>
        </SignInContainer>
        <SignUp />
      </AuthenticationContainer>
  )
}

export default SignIn