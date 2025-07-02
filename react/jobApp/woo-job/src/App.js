import React from "react";
import './App.css';
import Button from './component/Button';

const App = () =>{
  return (
    <div>
      <h1>Welcome to Woo Job</h1>
      <Button bgc={"red"} />
      <Button  bgc={"cyan"} />
      <Button bgc={"yellow"} />
      <Button bgc={"black"} />
    </div>
  )
  

}

export default App;
