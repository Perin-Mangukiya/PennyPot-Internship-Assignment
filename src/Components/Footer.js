import React from 'react'
import styled from 'styled-components'
import { CiFacebook, CiTwitter, CiYoutube, CiLinkedin } from "react-icons/ci"

function Footer() {
  return (
    <Main className='footer' style={{height: '450px'}}>
        <Wrapper>
            <CompDesc>
                <div className='company-name'>
                    <img src="logo2.png" alt="" />
                </div>
                <p>Join the revolution and see how easy <br></br>Middle makes home loans</p>
            </CompDesc>
            <Desc>
                <Company>
                    <h3>Company</h3>
                    <p>Contact</p>
                </Company>
                <Help>
                    <h3>Who we help</h3>
                    <p>Customers</p>
                    <p>Brokers</p>
                    <p>Lenders</p>
                </Help>
                <Social>
                    <h3>Follow Us On</h3>
                    <CiFacebook size='40px'/>
                    <CiTwitter size='40px'/>
                    <CiYoutube size='40px'/>
                    <CiLinkedin size='40px'/>
                </Social>
            
            </Desc>
        </Wrapper>
        <BottomText>
            <hr/>
            <CopyRight >
                <div>© 2023 Penny Pot | ABN 99 649 575 315 | Australian Credit License 536443</div>
                <div className='terms'>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Privacy Collection Notice</p>
                </div>
            </CopyRight>
        </BottomText>

    </Main>
  )
}

export default Footer

const Main = styled.div`
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000000;
    height:350px;
    color: white;
    padding-inline: 50px;
`
const Wrapper = styled.div`
    height:350px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const CompDesc = styled.div`
    .company-name{
        
        img{
            width: 150px;
            border: none;
        }
    }
`
const Desc = styled.div`
    display: flex;
    justify-content: center;
`
const Company = styled.div`
    padding-inline: 50px;
`
const Help = styled.div`
    padding-inline: 50px;

`
const Social = styled.div`
    padding-inline: 50px;

`
const BottomText = styled.div`
    hr{
        background-color: #7c7d7e;
    }
    width: 100%;
    height: 100px;
`
const CopyRight = styled.div`
    color: #6b6c6d;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .terms {
        display: flex;
        p{
            padding-inline: 10px;
        }
    }
`