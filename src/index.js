import React from 'react';
import ReactDOM from 'react-dom';
import DrumKit from './DrumKit'

const App = () => {
  return (
    <div>
      <DrumKit />
    </div>
  );
};

ReactDOM.render(<App />,document.querySelector('#root'));
