import React, { useState } from "react";


import './App.css';


function App () {
  const [number1,setNumber1]=useState(0);
  const [number2,setNumber2]=useState(0);
  const [number3,setNumber3]=useState(0);
  const [area, setArea]=useState(0);
  
  const areaofTriangle =()=>{
    let s = (parseInt(number1)+parseInt(number2)+parseInt(number3))/2;
    let area =Math.sqrt(s *(s-number1)*(s-number2)*(s-number3));
    
    setArea(area);

  }
  
  return (
    <div className="App">
      <h1>Area of a Triangle</h1>

    <div className="number-inputs">
      <p><strong>Side A</strong></p>
      <input type="number" placeholder="0" value={number1} onChange={e =>setNumber1(+e.target.value)} /><br></br>
      <p><strong>Side B</strong></p>
      <input type="number" placeholder="0" value={number2} onChange={e =>setNumber2(+e.target.value)} /><br></br>
      <p><strong>Side C</strong></p>
      <input type="number" placeholder="0" value={number3} onChange={e =>setNumber3(+e.target.value)} /><br></br>
      
    </div>
    <br></br>
    <button onClick={areaofTriangle}>AREA</button><br></br><br></br>
    <input type="number" placeholder="0" value={area} /><br></br>
    <br></br>
    
   
    </div>
  );
}
export default App;