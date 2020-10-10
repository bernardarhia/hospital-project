import React,{useState, useEffect} from "react"
import {Link} from "gatsby";
import Button from "./universal_components/Button";
const Navbar = () => {
    const navItems = [
        {
            text:"Home",
        },
        {
            text:"Benefits",
        },
        {
            text:"Plans",
        },
        {
            text:"Downloads",
        },
        {
            text:"Support",

        },
    ]

    const [mobileViewToggle, setMobileViewToggle] = useState(null);


    useEffect(()=>{
        window.addEventListener("resize", function(){
            if(window.innerWidth <= 940){
                setMobileViewToggle(false)
            }else{
                setMobileViewToggle(true)
            }
        })
    }, []);
  return (
    <nav className="nav">
      <div className="container">
          <div className="nav__container">
            {/* Project logo */}
        <div className="logo">
            <Link to="/">
                <img src="https://res.cloudinary.com/everich1/image/upload/v1602237300/deepb/Group_4_iizmgr.png" alt="logo"/>
                <img src="https://res.cloudinary.com/everich1/image/upload/v1602236900/deepb/logo_whfsgo.png" alt="logo name"/>
            </Link>
        </div>

        {/* Navlist and button */}

        <ul className="nav__lists">
            {navItems.map((navItem, index)=>{
                return (
                    <li className="nav__list" key={index}>
                        <Link to="/">{navItem.text}</Link>
                    </li>
                )
            })}
        </ul>
            <div className="nav__btn">
            <Button isButton={false} btnSize={mobileViewToggle=== false ? "btn__mobile":"btn__small"} btnBgColor="btn__primary" btnShape="btn__curved" to="/" >Get Started</Button>
            </div>

            <div className="toggle__icons"></div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
