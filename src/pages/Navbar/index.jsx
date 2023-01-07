import React from 'react';
import { FaBars } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsBrightnessHigh } from "react-icons/bs";
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


    return (
        <>
            <Nav>
                <NavbarContainer>

                    <NavLogo to="/">
                        <img src={"logo"} style={{ width: '50%' }} />
                    </NavLogo>

                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='Inicio'>Inicio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='Nosotros'>Nosotros</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='servicios'>servicios</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='proyectos'>Proyetos</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href="" target="_blank" rel='noreferrer noopener'><FaLinkedin /></NavLinks>
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