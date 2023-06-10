import './App.css';
import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';

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
    <Router>
    <Navbar title="TextUtils" aboutText = "About" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
      <Routes>
          <Route exact path="/" element={<TextForm/>}/>
          <Route exact path="/About" element={<About/>}/>
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
