import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Header from './pages/Header';
import Home from './pages/HomePage';
import Calculator from './pages/CalculatorPage';
import Quotes from './pages/QuotePage';
import './App.css';

const WebApp = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quotes" element={<Quotes />} />
    </Routes>
  </div>
);

const App = () => (
  ReactDOM.createRoot(document.getElementById('Calculator'))
    .render(
      <React.StrictMode>
        <Router>
          <WebApp />
        </Router>
      </React.StrictMode>,
    )
);

export default App;
