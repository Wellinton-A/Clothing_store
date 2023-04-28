import SignUp from '../SignUp';

import Button from '../Button';

import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  return (
    <>
      <h1>
        Sign-In
      </h1>
      <Button buttonType='google' onClick={logGoogleUser}>SignIn with Google</Button>
      <SignUp />
    </>
  )
}

export default SignIn