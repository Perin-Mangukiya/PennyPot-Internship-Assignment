import './App.css';
import styled from 'styled-components';
import Carousel  from './Components/Carousel';
import SingleBlog from './Components/SingleBlog';
import { useEffect, useState } from 'react';
import Data from './data';

  

function App() {

  const [size, setSize] = useState(window.innerWidth);
  const [blogData, setBlogData] = useState(Data.slice(0, 3));

   const rdr =  function render(){


    const checkSize = () => {
      setSize(window.innerWidth);
    };
  
    window.addEventListener('resize', checkSize);
    var content=document.querySelector('.content');
    var container=document.querySelector('.child-container');
    content.style.height=container.offsetHeight + 'px';
    if(Data){
      return () => {
        // clean up function
        window.removeEventListener('resize', checkSize);
      }
  
    }
  
  }

  function handleClickLoad() {
    setBlogData(Data.slice(0, blogData.length + 2))
  }
 

  useEffect(()=>{ 
    console.log("called")
    rdr();
  });

  return (

    <div className="App">
      <FirstWrapper>
        <Carousel/>
      </FirstWrapper>
      <SecondWrapper className='content'>
      <BlogList className='child-container'>
          <span>
            <p style={{textAlign: 'center', paddingTop: '50px'}}>Latest Insights</p>
            <hr style={{width: '100px', marginTop: '-10px', marginInline: 'auto'}}/>
          </span>
          {blogData.map((item)=> <SingleBlog {...item} rdr = {rdr} /> )}
          <div className='load-more-div'>
            <button className='load-more' onClick={handleClickLoad}>Load More</button>

          </div>
        </BlogList>
      </SecondWrapper>
    </div>
  );
}

export default App;


const FirstWrapper = styled.div`
  background-color: #2d2d2d;
  width: 100%;
  height: 100vh;
  z-index: -1;
`
const SecondWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
const BlogList = styled.div`
  height: fit-content;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  position: absolute;
  top: -100px;
  left: 10vw;
  right: 10vw;

  border-radius: 10px;
  z-index: 10;
  .load-more-div{
    text-align: center;
  }
  .load-more {
    color: white;
    border-radius: 20px;
    border: 0;
    height: 30px;
    width: 120px;
    margin-bottom: 80px;
    background-color: #555555;
    }
`