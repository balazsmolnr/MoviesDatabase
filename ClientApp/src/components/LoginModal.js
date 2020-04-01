import React from 'react';
import '../style/RegLoginModal.css';

const LoginModal = (props) => {
    return (
        <div>
            <div className="modal-container"
                style={{
                    display: props.show ? 'block' : 'none',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="header">
                    <h3>Login</h3>
                    <span className="close-btn" onClick={props.toggle}>&times;</span>
                </div>
                <div className="body">
                    <input className="input-field" placeholder="E-mail..."></input>
                    <input type="password" className="input-field" placeholder="Password..."></input>
                </div>
                <div className="footer">
                    <button className="btn-cancel" onClick={props.toggle}>Cancel</button>
                    <button className="btn-register">Login</button>
                </div>
            </div>
        </div>
    )
}


export default LoginModal;