import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SparshIntro from './components/SparshIntro';
import ToggleLove from './components/ToggleLove';
import React,{ useState } from 'react';

function App() {
  const [isFaded, setIsFaded] = useState(false);
  const [showIntro, setIntro] = useState(true);
  const toggleFaded = ()=>{
    if(isFaded==true){return;}
    setIsFaded(!isFaded);
    toggleIntro();
  }
  const toggleIntro = () => {
    setTimeout(() => {
      setIntro(false);
    }, 1000);
  }
  return (
    <>
    {/* <Navbar dropdown="Language" /> */}
    {/* <div className='Container'>
    <ToggleLove/>
    </div> */}
    <div className='Container'>
      {showIntro && <SparshIntro func={toggleFaded} isFaded={isFaded}/>}
    </div>
    <div>
      <Navbar isFaded={!isFaded}/>
    </div>
    </>
  );
}

export default App;
