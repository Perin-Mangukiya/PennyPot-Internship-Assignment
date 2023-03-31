import React from 'react'
import styled from 'styled-components'


function SingleBlog({ id, title, img, desc , rdr }) {


    return (
        <Wrapper>
            <h2 style={{ fontSize: '28px' }}>{title}</h2>
            <p style={{ fontSize: '10px' }}>Investing | 5 minute read</p>
            {img ?  <img onLoad={rdr} className='post-image' style={{ width: '80%', borderRadius: '8px', marginBottom: '5px'}} src={img} alt="" /> : <></>}
            <div style={{ fontWeight: '250px' }}>
                {desc}
            </div>
            <button>Read Now</button>
            
        </Wrapper>
    )
}

export default SingleBlog

const Wrapper = styled.div`
    padding-inline: 20%;
    padding-block: 5%;
    color: #555555;

    button {
        color: white;
        margin-top: 25px;
        border-radius: 20px;
        border: 0;
        height: 30px;
        width: 120px;
        margin-bottom: 80px;
        background-color: #555555;
    }
`