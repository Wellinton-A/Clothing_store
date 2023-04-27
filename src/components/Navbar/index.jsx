import { Link } from "react-router-dom"
import { ReactComponent as StoreLogo } from "../../assets/crown.svg"

import './nav-bar.scss'

const Navbar = () => {

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
          <Link className="nav-link" to='/sign-in'>
            SIGNIN
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar