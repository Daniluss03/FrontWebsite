import styled  from 'styled-components';

import  {Link as linkR} from 'react-router-dom';
import  {Link as linkS} from 'react-router-dom'; 

export const Nav=styled.nav`
background:  #fff;
height: 72px;
display:flex;
justify-content:center;
align-items:center;
font-size: 1rem;
position:sticky;
top:0;
z-index: 997;
transition: all 0.5s;

box-shadow: #000

@media screen and (max-width:960px){
    transition:0.8s all ease;
}`;



export const NavbarContainer= styled.div`
display:flex;
justify-content:space-between;
height:80px;
z-index:1;
width:100%;
padding:0 24px;
max-width: 1100px;
`;

export const NavLogo=styled(linkR)`
color: #37517e;
justify-self:flex-start;
cursor:pointer;
font-size:1.5rem;
display:flex;
align-items:center;
margin-left:24px;
font-weight:bold;
text-decoration:none;
`;

export const MobileIcon = styled.div`
display :none;
background:#fff;
color:#fff;
@media screen and (max-width: 768px){
 display:block;
 position:absolute;
 top:0;
 right:0;
 transform:translate(-100%,60%);
 font-size:1.8rem;
 cursor:pointer;
 color:#000;

}
`
export const NavMenu =styled.ul`
display:flex;
align-items:center;
list-style:none;
text-align:center;
margin-right: -22px;


@media screen and (max-width:768px){
    display:none;
}
`;

export const NavItem=  styled.li`
height:80px`;

export const NavLinks=styled(linkS)`
color:#000;
display:flex;
align-items:center;
text-decoration:none;
padding:0 1rem;
height: 100%;
cursor:pointer;

&:hover{
    color:#37517e;
    transition:0.2s ease-in-out;

}
`;

