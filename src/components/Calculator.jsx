import React from 'react';
// import calculate from '../logic/calculator';
// import calculate from '../logic/calculator';

const Calculator = () => {
  const btnNames = [
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];
  const handleOperation = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    // console.log('sonick');
    // const ans = calculate();
    const btn = document.querySelector('.button-operation');
  };

  return (
    <div className="calculator-main-container">
      <div className="calculator-title-container">
        <h2 className="calculator-title">Let us do some math!</h2>
      </div>
      <div>sonick</div>
      <div className="calculator-grid-container">
        { btnNames.map((btnName) => (
          <button
            onClick={handleOperation}
            name={btnName}
            type="button"
            className={`btn ${btnName === '0' ? 'zero-button' : ''}
            ${btnName === '=' ? 'button-operation' : ''}
            ${btnName === '÷' ? 'button-operation' : ''}
            ${btnName === 'x' ? 'button-operation' : ''}
            ${btnName === '-' ? 'button-operation' : ''}
            ${btnName === '+' ? 'button-operation' : ''}`}
            key={btnName}
          >
            { btnName }
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
