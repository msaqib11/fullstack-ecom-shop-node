import { Outlet } from "react-router-dom"
import Navbar from "./navbar"
import Announcement from "./navbar/Announcement"
import Footer from "./footer"


const Layout = () => {
  return (
    <div
      className=""
    >
      <Announcement />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout