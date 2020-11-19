import { Link } from 'gatsby'
import React from 'react'

const Navbar = () => {

    const navLists = [
        {
            text:"Home",
            location : "/"
        },
        {
            text:"Blog",
            location : "/blog"
        },
        {
            text:"Services",
            location : "/service"
        },
        {
            text:"Faq",
            location : "/faq"
        },
        {
            text:"Contact Us",
            location : "/contact"
        },
        {
            text:"About",
            location : "/about"
        },
    ]
    return (
        <nav className="navbar">
           <div className="logo">
            <img src="https://res.cloudinary.com/everich1/image/upload/v1602495828/hopital%20project/Logo_fwzlqd.png" alt=""/>   
            </div> 

            <ul className="nav__lists">
                {navLists.map((navList, index)=>{
                    return (
                        <li className="nav__list" key={index}>
                            <Link to={navList.location}>{navList.text}</Link>
                        </li>
                    )
                })}
            </ul>
                <div className="cta">
                    <Link to="/">Book Appointment</Link>
                </div>
        </nav>
    )
}

export default Navbar
