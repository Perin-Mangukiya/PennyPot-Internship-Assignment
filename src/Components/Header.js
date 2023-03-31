import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
  <>
    <NavBar>
        <Logo>
            <img src="logo.png" alt="" />
        </Logo>
        <NavigationLink>
            <a href="/">Home</a>
            <a href="">Tags</a>
        </NavigationLink>
        

    </NavBar>
  </>
    
  )
}

export default Header

const NavBar = styled.div`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background-color: #2d2d2d;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled.span`
    margin-left: 100px;
    img{
        width: 150px;
    }
`
const NavigationLink = styled.span`    
    margin-right: 100px;
    a{
        color: white;
        padding-inline: 20px;
        text-decoration: none;
    }
`