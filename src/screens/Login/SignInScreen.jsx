import React from 'react';
import { useState } from 'react';


const SignInScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  return (
    <div style={styles.generalContainer}>  
      <div style={styles.signInContainer}>
        <h1 style={styles.welcomeText}>Hi! Welcome Back to<br />Easy Manager</h1>
        
        <div style={styles.formContainer}>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input 
              type="email" 
              placeholder="Your email" 
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button 
            style={styles.signInButton}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.signUpButtonHover.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.signUpButton.backgroundColor}
          >
            Sign In
          </button>

          <p style={styles.signInText}>
          Don’t have an account?{' '}
            <a 
              href="#" 
              style={styles.signInLink}
              onMouseOver={(e) => e.currentTarget.style.textDecoration = styles.signInLinkHover.textDecoration}
              onMouseOut={(e) => e.currentTarget.style.textDecoration = styles.signInLink.textDecoration}
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>  
  );
};

const styles = {

  generalContainer: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
  },
  signInContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#ffffff',
    fontFamily: "'Arial', sans-serif",
    padding: '20px',
    boxSizing: 'border-box',
  },
  welcomeText: {
    fontSize: '24px',
    color: '#333333',
    textAlign: 'center',
    marginBottom: '30px',
  },
  formContainer: {
    width: '100%',
    maxWidth: '400px',
  },
  inputGroup: {
    marginBottom: '20px',
    width: '100%',
  },
  
  inputField: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '8px',
    fontSize: '14px',
    color: '#333333',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #dddddd',
    borderRadius: '50px',
    fontSize: '14px',
    color: '#333333',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
  },
  signInButton: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#4a90e2',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    fontSize: '12px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background-color 0.3s'
  },
  signInButtonHover: {
    backgroundColor: '#3a7bc8'
  },
  signInText: {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '14px',
    color: '#333333',
  },
  signInLink: {
    color: '#333333',
    textDecoration: 'none',
    fontWeight: 'bold'
  },
  signInLinkHover: {
    textDecoration: 'underline'
  }
};

export default SignInScreen;