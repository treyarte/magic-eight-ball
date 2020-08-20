import React, { useState } from 'react';
import './EightBall.css';
import eightBallAnswers from './eightBallAnswers';
import { getRandElement } from './helper.js';

const EightBall = () => {
  const defaultMsg = 'Think of a Question';
  const defaultColor = 'black';
  const [msg, setMsg] = useState(defaultMsg);
  const [color, setColor] = useState(defaultColor);

  const handleClick = () => {
    const { msg, color } = getRandElement(eightBallAnswers);
    setColor(color);
    setMsg(msg);
  };

  const handleReset = () => {
    setMsg(defaultMsg);
    setColor(defaultColor);
  };
  return (
    <>
      <div
        className='eightball'
        onClick={handleClick}
        style={{ backgroundColor: color }}
      >
        <h4 className='message'>{msg}</h4>
      </div>

      <div className='button-container'>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
};

export default EightBall;
