import { useState } from "react"

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

import FormImput from "../Form-input"
import Button from "../Button"

import "./sign-up.scss"

const userData = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUp = () => {
const [ formData, setformData ] = useState(userData)

const { displayName, email, password, confirmPassword } = formData

const handleChange = (e) => {
  const { name, value } = e.target;

  setformData({...formData, [name]: value})
}

const handleSubmit = async (e) => {
  e.preventDefault()
  if (password !== confirmPassword) {
    alert('Passwords does not mactch!!')
    return
  }

  try {
    const { user } = await createAuthUserWithEmailAndPassword(email, password)
    await createUserDocumentFromAuth(user, {displayName})
    setformData(userData)
  } catch(error) {
    if (error.code === 'auth/email-already-in-use'){
      alert('E-mail already exists')
    } else {
      console.log('User Creation enconter an error', error.message)
    }
  }

}


  return(
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormImput label={'Display Name'} onChange={handleChange} required type="text" name="displayName" value={displayName}/>
        <FormImput label={'E-mail'} onChange={handleChange} required type="email" name="email" value={email}/>
        <FormImput label={'Password'} onChange={handleChange} required type="password" name="password" value={password}/>
        <FormImput label={'Confirm Password'} onChange={handleChange} required type="password" name="confirmPassword" value={confirmPassword}/>
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUp