import React from 'react';
import LoginForm from './LoginForm';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/*background layer */}
      <div className="background-image"></div>
      {/*blur layer */}
      <div className="blur-layer"></div>
      {/* Login Form */}
      <LoginForm className="login-form" />
    </div>
  );
}


export default App;
