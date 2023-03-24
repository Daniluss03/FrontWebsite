
import { FaBars } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import React  from 'react';
import { animateScroll } from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,


} from './NavbarElements';


const Navbar = ({ toggle }) => {
    const handleClick = () => {
        animateScroll.scrollTo(500, {
          duration: 2400,
          smooth: 'easeInOutQuint'
        });
      };

    return (


        <>
            <Nav>
                <NavbarContainer>

                    <NavLogo to="/">
                        <img alt="" src={"logo"} style={{ width: '50%' }} />
                    </NavLogo>

                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks  onClick={handleClick} to='/Home'>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks   onClick={handleClick} to='Nosotros'>About us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks onClick={handleClick} id='servicios'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks  onClick={handleClick} to='proyectos'>Proyects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks  onClick={handleClick} to='login'>Login</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks  onClick={handleClick} to='plans'>Plans</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href="https://www.linkedin.com/in/danilo-rincon-maldonado-2a1bb9217/" target="https://www.linkedin.com/in/danilo-rincon-maldonado-2a1bb9217/" rel='noreferrer noopener'><FaLinkedin /></NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href="" target="_blank" rel='noreferrer noopener'><FaFacebook /></NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href="" target="_blank" rel='noreferrer noopener'><AiFillInstagram /></NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href="" target="_blank" rel='noreferrer noopener'><AiOutlineTwitter /></NavLinks>
                        </NavItem>



                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;