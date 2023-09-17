import React from 'react';

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

  return (
    <div className="calculator-main-container">
      <div className="calculator-title-container">
        <h2 className="calculator-title">Let us do some math!</h2>
      </div>
      <div className="calculator-grid-container">
        { btnNames.map((btnName) => (
          <button
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
