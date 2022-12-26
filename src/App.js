// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  const [Mode, setMode] = useState('light') // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Home Dark Mode";

      // setInterval(() => {
      //   document.title = "TextUtils is Amazing";
      // }, 1000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 2000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Home Light Mode"
    }
  }
  return (
    <>
      {/* <Router> */}
        {/* <Navbar title="TextUtils" aboutText="About US"/> */}
        <Navbar title="TextUtils" Mode={Mode} toggleMode={toggleMode} />
        {/* <Navbar/> */}
        <Alert alert={alert} />
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" Mode={Mode} />
        {/* <div className="container my-3"> */}

          {/* <Routes> */}
            {/* /users --> Component 1
                /users/home --> Component 2 */}
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" Mode={Mode} />}></Route> */}
            {/* <Route exact path="/about" element={<About />}></Route> */}
          {/* </Routes> */}

        {/* </div> */}
      {/* </Router> */}
    </>
  );
}

export default App;
