import styled from "styled-components";
import { Link } from "react-scroll";


export const Button = styled(Link)`

background:#fff;
white-space:nowrap;
padding:${({big})=>(big  ? '14px 48px':'12px 30px')};
color:#37517e;

outline:none;
cursor:pointer;
width:1.5rem;
display:flex;
justify-content:center;
align-items:center;

&:hover{
        transition:all0.2 ease-in-out;;
    background:${({primary})=>(primary ?'#37517e':'transparent')};
    
}
`
