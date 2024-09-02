// src/components/MainContent.js
// import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="left-block">
        <div className="upper-div">
          <img src="src/assets/TorchKB.png" alt="Torch KB Large Icon" className="large-torch-icon" />
          <div className="torch-kb-title">
            <h1>Torch KB</h1>
            <p>Your AI Powered Knowledge Base</p>
          </div>
        </div>
        <div className="lower-div">
          <p>Effortlessly summarise, organise, interact, revise & create quizzes with your YouTube knowledge base.</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="right-block">
        <h2>Welcome To Torch KB</h2>
        <p>Create A New Account</p>
        <img src="/src/assets/signup.png" alt="Sign Up" className="signup-img" />
        <p>
          Already have an account? <span className="sign-in">Sign In</span>
        </p>
        <p>
          By continuing you agree to our <span className="terms">Terms Of Service & Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default MainContent;
