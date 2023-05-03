import { useContext } from "react"

import { ReactComponent as StoreLogo } from "../../assets/crown.svg"
import { userContext } from "../../context/user-context"
import { CartContext } from "../../context/cart-context"
import { signOutUser } from "../../utils/firebase/firebase.utils"

import CardIcon from "../Cart-Ic"
import CartDropdown from "../Cart-dropdown"

import {
  LogoContainer,
  NavLink,
  NavLinksContainer,
  NavSignOut,
  Navigation
} from "./nav-bar.js"

const Navbar = () => {
  const { currentUser } = useContext(userContext)
  const { showDropdown } = useContext(CartContext)

  return (
    <header>
      <Navigation>
        <LogoContainer to='/'>
          <StoreLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {currentUser ? (<NavSignOut onClick={signOutUser} className="nav-link" >
            SIGN OUT
          </NavSignOut>) : (
            <NavLink className="nav-link" to='/sign-in'>
            SIGN IN
          </NavLink>
          )}
          <CardIcon />
        </NavLinksContainer>
        {
        showDropdown &&(
          <CartDropdown />
        )
      }
      </Navigation>
    </header>
  )
}

export default Navbar