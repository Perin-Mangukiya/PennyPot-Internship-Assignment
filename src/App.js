import './App.css';
import styled from 'styled-components';
import Carousel  from './Components/Carousel';
import SingleBlog from './Components/SingleBlog';
import { useEffect, useState } from 'react';
import Data from './data';

function App() {
  console.log(window);
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(()=>{
    window.addEventListener('resize', checkSize);
    var content=document.querySelector('.content');
    var container=document.querySelector('.child-container');
    content.style.height=container.offsetHeight + 'px';
    return () => { // clean up function
      window.removeEventListener('resize', checkSize);
    }
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
            <hr style={{width: '100px', marginTop: '-10px'}}/>
          </span>
          {Data.map((item)=><SingleBlog {...item} />)}
          <button className='load-more'>Load More</button>
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
  left: 150px;
  right: 150px;

  border-radius: 10px;
  z-index: 10;

  .load-more {
    color: white;
    border-radius: 20px;
    border: 0;
    height: 30px;
    width: 120px;
    margin-bottom: 80px;
    background-color: #555555;
    margin-left: 45%;
    }
`