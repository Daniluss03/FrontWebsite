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
                    <SidebarLink to="Inicio"onClick={toggle} >Inicio</SidebarLink>
                    <SidebarLink to="Nosotros" onClick={toggle}>Nosotros</SidebarLink>
                    <SidebarLink to="servicios" onClick={toggle}>servicios</SidebarLink>
                    <SidebarLink to="Proyectos" onClick={toggle}>Proyectos </SidebarLink>
                </SidebarMenu>
              
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;