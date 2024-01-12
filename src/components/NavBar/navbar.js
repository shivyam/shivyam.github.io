import React from 'react';
import './navbar.css';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png';

import {useState} from 'react'
import logo from '../../assets/logo.png';
import menu from '../../assets/menu2.png';

const Navbar=()=>{

    const [fix, setFix]= useState(false);
    function setFixed(){
        if(window.scrollY>=10){
            setFix(true);
        }
        else{
            setFix(false);
        }
    }
    window.addEventListener("scroll",setFixed);


    const [showMenu, setShowMenu]= useState(false);


    return(
        <nav className={fix ? 'navbar fixed' : 'navbar' }> 
            <img src={logo} alt="logo" className="logo"></img>
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Experience</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Projects</Link>
                <Link activeClass='active' to='education' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Education</Link>
                <Link activeClass='active' to='events' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Skills</Link>
                
            </div>

            <button className= "desktopMenuBtn" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}> Contact Me
            </button>

            <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}></img>
            <div className="navMenu" style= {{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={0} duration={500} className="mobileMenuListItem" onClick={()=> setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='education' spy={true} smooth={true} offset={0} duration={500} className="mobileMenuListItem" onClick={()=> setShowMenu(false)}>Education</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-200} duration={500} className="mobileMenuListItem" onClick={()=> setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-180} duration={500} className="mobileMenuListItem" onClick={()=> setShowMenu(false)}>Experience</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="mobileMenuListItem" onClick={()=> setShowMenu(false)}>Skills</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-200} duration={500} className="mobileMenuListItem" onClick={()=> setShowMenu(false)}>Contact Me</Link>
            </div>
        </nav>
    )
};

export default Navbar