import React from 'react'
import "./navbar.scss"
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <img src = "logo.svg" alt = ""/>
            <span>Archit Admin</span>
        </div>

        <div className="icons">
            <img src = "/search.svg"  alt =" " className="icon" />
            <img src = "/app.svg"  alt =" " className="icon" />
            <img src = "/expand.svg"  alt =" " className="icon" />
            <div className="notification">
                <img className='/notification.svg' alt = ""  src ="/notifications.svg"/>
              <span>1</span>
            </div>
            <div className="user">
                <img src= "/profile.svg"  alt ="" />
                <span>Archit</span>
            </div>
            <img src = "/settings.svg"  alt =" " className="icon" />
        </div>


    </div>
  )
}

export default Navbar
