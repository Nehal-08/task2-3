// LoginDashboard.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const LoginDashboard = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const validateEmail = (email: string) => {
    
    return /\S+@\S+\.\S+/.test(email);
  };

  function validatePassword(password: string) {
        
        const uppercaseRegex = /[A-Z]/;
        const numberRegex = /[0-9]/;
        const allowedSpecialCharsRegex = /[@]/;

        
        if (!uppercaseRegex.test(password)) {
            console.log(1);
            return false;
        }

        
        if (!numberRegex.test(password)) {
            console.log(2);
            return false;
        }

        
        if (!allowedSpecialCharsRegex.test(password)) {
            console.log(3);
            return false;
        }

        
        if (password.length < 8) {
            console.log(4);
            return false;
        }

        
        return true;
    }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!validatePassword(password)) {
        alert('Please enter a valid password');
        return;
    }
    
    if(password !== 'ZenTradesTest@123')
        alert('Wrong Password')
    else {
        navigate('/admin');
    }
  };

  return (
    <div className='loginDashboardContainer'>
    <div className="login-dashboard">
      <h1 className="zentradles-heading">ZenTrades</h1>
      <input
        type="email"
        placeholder="E-mail address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <label>
        <input
          id="rememberMe"
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        Remember me
      </label>
      <button onClick={handleSubmit}>Sign In</button>
      <a href="mailto:support@zentrades.pro">Forgot your password?</a>
    </div>
    </div>
  );
};

export default LoginDashboard;
