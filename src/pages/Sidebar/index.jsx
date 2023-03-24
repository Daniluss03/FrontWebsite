import React from 'react';

import { SidebarContainer, 
    Icon,
     CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,


} from './SidebarElements';
const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="Home"onClick={toggle} >Home</SidebarLink>
                    <SidebarLink to="About " onClick={toggle}>About us</SidebarLink>
                    <SidebarLink to="Servicies" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="Proyects" onClick={toggle}>Proyects </SidebarLink>
                    <SidebarLink to="login" onClick={toggle}>Login </SidebarLink>
                </SidebarMenu>
              
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;