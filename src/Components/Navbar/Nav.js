import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsXLg } from "react-icons/bs";
import { useState } from 'react';
import { FaHome } from "react-icons/fa"

const Nav = () => {
    const [click, Setclick] = useState(true);
    const handleClick = () => Setclick(!click);
    return (
        <NaV>
            <div className='navbar'>
                <div onClick={handleClick} className='mobile-icon'>
                    {click ? <GiHamburgerMenu className='mobile-nav-icon--menu' /> : <BsXLg className='mobile-nav-icon--menu' />}
                    <FaHome className='home-icon' />
                </div>


                <div className='ul-container'>
                    <ul className={click ? 'navlist--ul' : 'navlist--ul active'}>
                        <li className='navlist-links'>
                            <NavLink onClick={handleClick} className='navlist-navlinks--items' to='/'>Home</NavLink>
                        </li>
                        <li className='navlist-links'>
                            <NavLink onClick={handleClick} className='navlist-navlinks--items' to='/about'>About Us</NavLink>
                        </li>
                        <li className='navlist-links'>
                            <NavLink onClick={handleClick} className='navlist-navlinks--items' to='/contact'>Contact</NavLink>
                        </li>
                        <li className='navlist-links'>
                            <NavLink onClick={handleClick} className='navlist-navlinks--items' to='/product'>Product</NavLink>
                        </li>
                        <li className='navlist-links'>
                            <NavLink onClick={handleClick} className='navlist-navlinks--items' to='/cart'>
                                <FiShoppingCart className='shop-trolley' />
                                <span onClick={handleClick} className='cart-total-items'>10</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>



            </div>
        </NaV>
    )
};

const NaV = styled.nav`
.mobile-icon
{
visibility:hidden;
}
.navlist--ul
{
    display:flex;
    align-items:center;
    gap:40px;
    justify-content:center;
 
}
.navlist-navlinks--items
{   color:#a54c68;
    font-weight:450;
    text-decoration:none;
    font-size:1.3rem;
    list-style:none;
    font-family:system-ui;
    &:hover,
    &:active
    {
        color:#e80a81;
        border-bottom:2px solid pink;
    }
}
.navlist-links
{
    list-style:none;
}
.shop-trolley
{
    color:#e80a81;
    font-size:30px;
}
.cart-total-items
{
    color:black;
    border-radius:50%;
    background-color:pink;
    font-size:12px;
}
.items-container
{
    background-color:green;
}
@media screen and (max-width:560px)
{
    .mobile-icon
    {
  visibility:visible;
    }
    .ul-container
    {
        height:100%;
    }
    .home-icon
    {
     float:left;
        font-size:1.6rem;
        margin:0.8rem;
        padding:0.3rem;
    }
    
   .navlist--ul
   {
   
    display:none;

   }
    
    .navlist--ul.active
    {    position:relative;
        display:flex;
        flex-direction:column;
        background-color:pink;
        margin:0;
         padding:0.8rem;
         top:12vh;
         overflow:hidden;
        
        
        
       

         .navlist-links
         {
            margin:0rem;
            padding:0.3rem;
         }
         
       

    }
    .mobile-nav-icon--menu
    {
        color:solid-pink;
        font-size:1.5rem;
         float:right;
        margin:0.8rem;
        padding:0.3rem;

    }
   
}


`



export default Nav