import './App.css';
import { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not.

  const toggleMode = () => {
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = 'grey';
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
    <Navbar title="TextUtils" aboutText = "About" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
      <TextForm heading = "Enter the text to analyze below" mode={mode}/>
      {/* <About/> */}
    </div>
    
    </>
  );
}

export default App;
