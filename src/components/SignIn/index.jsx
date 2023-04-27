import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user)
  }

  return (
    <>
      <h1>
        Sign-In
      </h1>
      <button onClick={logGoogleUser}>SignIn with Google</button>
    </>
  )
}

export default SignIn