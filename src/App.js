import './App.css';
import Alert from './custom_components/Alert';
import About from './custom_components/About';
import Navbar from './custom_components/Navbar';
import TextForm from './custom_components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
  
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('white');

  
  const showAlert = (msg, type) => {
    setAlert({
      message : msg,
      type : type
    });

    setTimeout(() => {
      setAlert(null) ;
    }, 2000);
  }


  const toggleMode = (theme) => {
    setMode(theme);

    switch(theme){
      case 'white':
        document.body.style.backgroundColor = 'beige' ; 
        showAlert("Light Mode has been enabled", "success");
        document.title = 'TextUtils - Light Mode' ;
        break;
        
        case 'black':
          document.body.style.backgroundColor = '#222222' ; 
          showAlert("Dark Mode has been enabled", "success") ;
          document.title = 'TextUtils - Dark Mode' ;
          break;
          
          case 'rgb(38 26 151)': 
          document.body.style.backgroundColor = '#0a072c' ; 
          showAlert("Blue Mode has been enabled", "success");
          document.title = 'TextUtils - Blue Mode' ;
          break;
          
          case '#D75B71':
            document.body.style.backgroundColor = 'pink' ;
            showAlert("Pink Mode has been enabled", "success");
            document.title = 'TextUtils - Pink Mode' ;
            break;
            
      default:
        break;
    }
  }


  return (
   <>

    <Router>
      <Navbar title="TextUtils" mode={ mode } toggle={ toggleMode } />
      <Alert alert = {alert} />
      
      <Routes>

        <Route path="/about" element={<About/>} />
        
        <Route path="/" element={<TextForm mode={mode} alert={showAlert} />}/>

      </Routes>

    </Router>
   </>
  );
}

export default App;
