import React, { useState, useMemo } from 'react';

const slowFunction = (number) => {
  for (let i = 0; i < 1000; i++) {}
  return number * 2;
};

const Usememo = () => {
  const [theme, setTheme] = useState(true);
  const [number, setNumber] = useState(0);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const doublingNumber = useMemo(() => {
    return slowFunction(doubleNumber);
  }, [doubleNumber]);

  const themeStyles = theme
    ? { backgroundColor: 'black', color: 'white' }
    : { backgroundColor: 'green', color: 'white' };

  return (
    <section>
      <h1>This is useMemo Example</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setTheme((prevTheme) => !prevTheme)}>
        Change Theme!
      </button>
      <div style={themeStyles}>
        <p>Double Number: {doubleNumber}</p>
        <p>Doubling of Double Number: {doublingNumber}</p>
      </div>
    </section>
  );
};

export default Usememo;
