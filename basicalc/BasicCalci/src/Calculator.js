import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
    
  };
  

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
   
  };

  const handleAddition = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
     setNum1("");
     setNum2("");
  };

  const handleSubtraction = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
    setNum1("");
    setNum2("");
  };

  const handleMultiplication = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
    setNum1("");
    setNum2("");
  };

  const handleDivision = () => {
    setResult(parseFloat(num1) / parseFloat(num2));
    setNum1("");
    setNum2("");
  };

 


  return (
    <div>
      <h1>Calculator</h1>
      <div className='inputs'>
        <input  className='inputs' type="number" value={num1} onChange={handleNum1Change} />
        <input className='inputs' type="number" value={num2} onChange={handleNum2Change} />
      </div>
       <div className='btns'>
          <button className='btns' onClick={handleAddition}>Addition</button>
          <button className='btns' onClick={handleSubtraction}>Subtraction</button>
          <button className='btns' onClick={handleMultiplication}>Multiplication</button>
          <button className='btns' onClick={handleDivision}>Division</button>
      </div>
      <h1>Result: {result}</h1>
    </div>
  );
};

export default Calculator;
