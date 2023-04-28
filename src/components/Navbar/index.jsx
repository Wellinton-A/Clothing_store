import { Link } from "react-router-dom"
import { useContext } from "react"

import { ReactComponent as StoreLogo } from "../../assets/crown.svg"
import { userContext } from "../../context"
import { signOutUser } from "../../utils/firebase/firebase.utils"

import './nav-bar.scss'

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(userContext)
  // console.log('current user:', currentUser)

  return (
    <header>
      <div className="navigation">
        <Link logo-container="logo-container" to='/'>
          <StoreLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>
          {currentUser ? (<span onClick={signOutUser} className="nav-link" >
            SIGN OUT
          </span>) : (
            <Link className="nav-link" to='/sign-in'>
            SIGN IN
          </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar