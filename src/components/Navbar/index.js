import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        window.scrollTo(0, 0)
    }

  return (
    <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>Jake Kressley</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                            to='about'
                            smooth={true} 
                            duration={500}
                             spy={true} 
                             exact='true' 
                             offset={-80}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='connect'
                            smooth={true} 
                            duration={500}
                             spy={true} 
                             exact='true' 
                             offset={-80}
                             >Connect</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projects'
                            smooth={true} 
                            duration={500}
                             spy={true} 
                             exact='true' 
                             offset={-80}
                             >Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='more'
                            smooth={true} 
                            duration={500}
                             spy={true} 
                             exact='true' 
                             offset={-80}>More</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav> 
        </IconContext.Provider>
    </>
  );
};

export default Navbar;
