import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const Navigationbar = () => {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Navigationbar