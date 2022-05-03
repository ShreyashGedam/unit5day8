// import { useState } from "react";
import "./App.css"
// import { Button } from "./components/button";
import "./components/test.css"

import Button from '@mui/material/Button';

function App() {

  // const [theme , setTheme] = useState("light")
  
  return ( 
    <div className="App">

      {/* <h2>Theme : {theme}</h2>
      <Button 
      onClick = {function()
      {
        alert("Clicked on click me")
      }}
      theme = {theme}
      >Theme : {theme}</Button>

      <Button
      onClick={function()
      {
        if(theme == "light")
        {
          setTheme("dark")
        }
        else{
          setTheme("light")
        }
      }}
      >Change Theme</Button> */} 
      <div className="buttons">

      <Button variant="contained">Primary Button</Button>
      <Button variant="outlined">Default button</Button>
      <Button>Text Button</Button>
      <Button href="#text-buttons">Link</Button>

      </div>
      

    </div>
  );
}

export default App;
