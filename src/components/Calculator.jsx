import React, { useState } from 'react';
import calculate from '../logic/calculator';
// import calculate from '../logic/calculator';
// import calculate from '../logic/calculator';

const Calculator = () => {
  const [obj, setobj] = useState({
    next: null,
    total: 0,
    operation: null,
  });
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
    const { next, total, operation } = calculate(obj, e.target.name);
    if (next === null && total == null) {
      setobj({
        next,
        total: 0,
        operation,
      });
    } else {
      setobj({
        next,
        total,
        operation,
      });
    }
  };

  return (
    <div className="calculator-main-container">
      <div className="calculator-title-container">
        <h2 className="calculator-title">Let us do some math!</h2>
      </div>
      <div className="calculator-grid-container">
        { obj.next ? (
          <div>
            { obj.next }
          </div>
        ) : (
          <div>
            { obj.total }
          </div>
        )}
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
