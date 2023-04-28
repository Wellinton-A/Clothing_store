import { useState } from "react"

import { createAuthUserWithEmailAndPassword } from "../utils/firebase/firebase.utils"

const userData = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUp = () => {
const [ formData, setformData ] = useState(userData)

console.log(formData)

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
    const response = await createAuthUserWithEmailAndPassword(email, password)
    console.log(response)
    setformData({displayName: '', email: '', password: '', confirmPassword: ''})
  } catch(error) {
    console.log('User Creation enconter an error', error.message)
  }

}


  return(
    <div>
      <h2>Sign Up if you do not have an account</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input onChange={handleChange} required type="text" name="displayName" value={displayName}/>
        <label>E-mail</label>
        <input onChange={handleChange} required type="email" name="email" value={email}/>
        <label>Password</label>
        <input onChange={handleChange} required type="password" name="password" value={password}/>
        <label>Confirm Password</label>
        <input onChange={handleChange} required type="password" name="confirmPassword" value={confirmPassword}/>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp