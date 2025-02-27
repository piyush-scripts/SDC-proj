import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Token from './components/Token';
import Login2 from './components/Login2';
import Token2 from './components/Token2';
import Login3 from './components/Login3';
import Token3 from './components/Token3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="/login3" element={<Login3 />} />
        <Route path="/token" element={<Token/>} />
        <Route path="/token2" element={<Token2 />} />
        <Route path="/token3" element={<Token3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;