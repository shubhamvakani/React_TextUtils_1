import './App.css';
import { useState } from "react"
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode enable or not 

  const [alert, setalert] = useState(null) // this state varible is for alert

  const showAleart = (message, type) => {
        setalert({
          msg : message,
          type : type
        })

        setTimeout(() => {
          setalert(null);
        }, 1500);
  }
 
  const togglemode = () => {
    if (mode === "light"){
      setMode('dark')
      document.body.style.backgroundColor = "grey"
      showAleart("Dark mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAleart("Light mode has been enabled", "success")
    }
  };

  return (
      <>
      <Navbar title = "TextUtils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
          <Route exact path="/about" element={<About/>} />
          <Route index path="/React_TextUtils_1" element={<TextForm  showAleart={showAleart} heading ="Enter Text to analyze below" mode={mode}/>}/>
      </Routes>
      </div> 
      </>
  );
}

export default App;
