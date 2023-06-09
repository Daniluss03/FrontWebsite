import React, { useState, useRef, useEffect } from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';
import styled, { css } from 'styled-components/macro';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';




export const HeroSection = styled.section`
height:80vh;
width: 100%;
padding-bottom:1rem;
padding-right:0.9rem;



`;


export const HeroWrapper = styled.div`
padding:4rem;
width: 100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;
position:relative;
`;


export const HeroSlide = styled.div`
z-index: 1;
width:100%;
height:100%;
`;


export const HeroSlider = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;


&::before{
    content:'';
    position:absolute;
    z-index:2;
    width:100%
    height:100vh;
    bottom:0vh;
    left:0;
    overflow:hidden;
    opacity:0.4;
    background:linear-gradient(
    0deg,
    rgba(0,0,0,0.2) 0%,
    rgba(0,0,0,0.2) 50%,
    rgba(0,0,0,0.6) 100%
    );
}
`;
export const HeroImage = styled.img`
position:absolute;
top:20px;
left:0px;
width:100vw;
height:100vh;
object-fit:cover;

`;
export const HeroContent = styled.div`
position:flex;
z-index:10;
display:flex;
flex-direction:column;
max-width:1600px;
width :calc(100%-100px);
color:#fff;

h1{
    font-size:clamp(1rem,8vw,20rem);
    font-weight:400;
    text-transform:uppercase;
    text-shadow:0px 0px 20px  rgba(0,0,0,0.4);
    text-align:left;
    margin-bottom:0.8rem;
}
p{
    margin-bottom 1.2rem;
    text-shadow:0px 0px 20px rgba(0,0,0,0.4);
}
`;
export const Arrow = styled(IoMdArrowRoundForward)`
margin-left:0.5 rem;`;

export const SliderButtons = styled.div`
position:flex;
bottom:10px;
right:50px;
display:flex;
z-index:20;
`;


export const arrowButtons = css`
width:50px;
height:50px;
color: #fff;
cursor:pointer;
background:#37517e;
border-radius:80px;
padding:18px;
margin-right: 1rem;
user-select:none;
transition: 0.3s;
&:hover{
    background:#cd853f;
    transform:scale(1.05);
}
`;


export const PrevArrow = styled(IoArrowBack)`
${arrowButtons}
`;

export const NextArrow = styled(IoArrowForward)`
${arrowButtons}
`;