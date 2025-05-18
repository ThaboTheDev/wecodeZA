import React from 'react'
import "./feedHeader.css"
import { MdClose } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TfiWrite } from "react-icons/tfi";
import { GoHome } from "react-icons/go";
import { ImMenu } from "react-icons/im";
import { Link } from 'react-router-dom';

const linkStyles = {
    color: "white",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "1rem"
}

function FeedHeader() {
  return (
    <header className='feedHeader'>
        <input type="checkbox" id='feedSidebar' />
        <label htmlFor="feedSidebar">
            <ImMenu className='feedMenu'/>
        </label>
        <nav className='feedNavbar'>
            <ul className='navTop'>
                <label htmlFor='feedSidebar' className='feedNavItem feedClose'>
                    <MdClose />
                </label>
                <label htmlFor="feedSidebar">
                <li className='feedNavItem'>
                    <Link to={"/feed"} style={linkStyles}>
                        <GoHome />
                        <p>Home</p>
                    </Link>
                </li>
                </label>
                <li className='feedNavItem'>
                    <Link to={"/write"} style={linkStyles}>
                        <TfiWrite />
                        <p>Write</p>
                    </Link>
                </li>
                <li className='feedNavItem'> 
                    <Link to={"/viewProfile"} style={linkStyles}>
                        <CgProfile />
                        <p>Profile</p>
                    </Link>
                </li>
            </ul>

            <ul className='navBottom'>
                <li className='feedNavItem'>
                    Account
                </li>
                <li className='feedNavItem'>
                    Logout
                </li>
            </ul>
        </nav>

        <Link to={"/feed"} style={{color: "black", textDecoration: "none"}} className="logo">WeCodeZA</Link>

        <div className="pageNav">
            <Link to={"/viewProfile"} className='feedDirection' >
                <CgProfile className='pageNavLinks'/>
            </Link>

            <Link to={"/write"} className='feedDirection'>
                <TfiWrite className='pageNavLinks' />
            </Link>
        </div>
    </header>
  )
}

export default FeedHeader