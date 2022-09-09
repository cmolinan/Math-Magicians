import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './components/Calculator';

const App = () => {
  const root = ReactDOM.createRoot(document.getElementById('Calculator'));
  root.render(
    <React.StrictMode>
      <Calculator />
    </React.StrictMode>,
  );
};

export default App;
