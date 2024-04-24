import React, { useState, useEffect } from 'react';
import LogoImg from '../src/assets/kocaelilogo.png';
import { motion } from 'framer-motion'; 
import { TextField } from '@mui/material';
import { styles, useFormInput, handleSubmit } from './formHandlers'; 

function LoginForm() {
  const emailInput = useFormInput('');
  const passwordInput = useFormInput('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const rememberMeState = localStorage.getItem('rememberMe');
    if (rememberMeState === 'true') {
      setRememberMe(true);
      const rememberedEmail = localStorage.getItem('rememberedEmail') || '';
      const rememberedPassword = localStorage.getItem('rememberedPassword') || '';
      emailInput.onChange({ target: { value: rememberedEmail } });
      passwordInput.onChange({ target: { value: rememberedPassword } });
    }
  }, []);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
    localStorage.setItem('rememberMe', !rememberMe);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (rememberMe) {
      localStorage.setItem('rememberedEmail', emailInput.value);
      localStorage.setItem('rememberedPassword', passwordInput.value);
    }
    handleSubmit(event, emailInput.value, passwordInput.value);
   
    // Append email and password as query parameters to the URL
   window.location.href = `https://embedded.kocaeli.edu.tr?email=${encodeURIComponent(emailInput.value)}&password=${encodeURIComponent(passwordInput.value)}`;
  };
  
  return (
    <div style={styles.cardStyle}>
      <div style={styles.loginSectionStyle}>
        <div style={{ textAlign: 'center', marginTop: '-48px' }}>
          <img src={LogoImg} alt="Logo" style={{ width: '35%', margin: '19px auto', marginTop:'66px',display: 'block' }} />
        </div>
        <form onSubmit={handleLoginSubmit}>
          <div style={styles.formGroupStyle}>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              id="email"
              required
              fullWidth
              margin="normal"
              {...emailInput}
            />
          </div>
          <div style={styles.formGroupStyle}>  
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              id="password"
              required
              fullWidth
              margin="normal"
              {...passwordInput}
            />
          </div>
          <div style={styles.checkboxStyle}>
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <label style={styles.checkboxLabelStyle} htmlFor="remember-me">Remember me</label>
          </div>
          <div style={styles.forgotPasswordContainerStyle}>
            <a href="#" style={styles.forgotPasswordStyle}>Forgot password</a>
          </div>
          <a href="https://embedded.kocaeli.edu.tr" style={{ textDecoration: 'Gömülü Sistemler' }}>
            <motion.button
              style={styles.buttonStyle}
              type="submit"
              variants={styles.buttonVariants}
              whileHover="hover" 
            >
              <h2 style={styles.loginingStyle}>Login</h2>
            </motion.button>
          </a>
        </form>
        <a href="/signup" style={{ ...styles.linkStyle, marginBottom: '15px' }}>Sign up</a>
       
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px',marginBottom:'0px' }}>
          <hr style={{ width: '40%', borderTop: '1px solid #ccc' }} />
          <span style={{ margin: '0 10px', fontFamily: "'Roboto', sans-serif"}}>or</span>
          <hr style={{ width: '40%', borderTop: '1px solid #ccc' }} />
        </div>
       
        <motion.button
          style={styles.edevletButtonStyle}
          type="submit"
          variants={styles.buttonVariants}
          whileHover="hover" 
        >
        </motion.button>
      </div>
      <div style={styles.infoSectionStyle}></div>
    </div>
  );
}
  
export default LoginForm;
