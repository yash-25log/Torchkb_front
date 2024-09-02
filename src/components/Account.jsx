// import React from 'react';
import './Account.css';
import closeIcon from '../assets/close.png';


const Account = () => {
  return (
    <div className="account-management">
      {/* Left Panel */}
      <div className="left-panel">
        <div className="header">
          <img src="src/assets/TorchKB.png" alt="Torch KB Icon" className="torch-icon" />
          <span className="torch-text">Torch KB</span>
        </div>
        <hr className="header-line" />
        <div className="user-info">
          <img src="src/assets/dsk.png" alt="User Icon" className="user-icon" />
          <span className="user-name">Deepak Senthil Krishnan’s Account</span>
        </div>
      </div>

      {/* Main Panel */}
      <div className="main-panel">
        <div className="top-right">
        <button className="close-button">
            <img src={closeIcon} alt="Close" className="close-icon" />
          </button>
        </div>
        <div className="user-details-section">
          <div className="user-info">
            <img src="src/assets/dsk.png" alt="User" className="dsk-image" />
            <div className="user-details">
              <div className="field-group">
                <label className="field-label">Name</label>
                <input type="text" className="input-placeholder" value="Deepak Senthil Krishnan" />
              </div>
              <div className="field-group">
                <label className="field-label">Email</label>
                <input type="email" className="input-placeholder" value="dsk003@gmail.com" />
              </div>
            </div>
          </div>
          <div className="sign-out">
            <button className="sign-out-button">
              Sign Out
              <img src="src/assets/SignOut.png" alt="Sign Out" className="signout-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
