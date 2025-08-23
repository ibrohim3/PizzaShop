import React from 'react';
import './Logn.css';
function Logn({ open, setOpen }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={() => setOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Log In</h2>
        <form className="modal-form">
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <a href="#" className="forgot">
            Forgot your password
          </a>
          <button type="submit">Login</button>
        </form>
          <button className="close-btn" onClick={() => setOpen(false)}>
            ✕
          </button>
      </div>
    </div>
  );
}

export default Logn;
