import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const[mode,setMode]= useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
  }

  const toggleMode=()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode is enabled","success");
      document.title='TextUtils-Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","success");
      document.title='TextUtils-Light Mode';
    }
    
  }
  return (
    <>
     <Router>
      <Navbar title="TextUtility App" aboutText="About TextUtility App" mode={mode} toggleProp={toggleMode}/>
        <Alert alertProp={alert}/>
        <div className="container mt-5">
            <Routes>
              <Route exact path="/" element={<TextForm showAlertProp={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
              <Route exact path="/about" element={ <About mode={mode}/> }/>
            </Routes>
        </div>
     </Router>
    </>
  );
}

export default App;
