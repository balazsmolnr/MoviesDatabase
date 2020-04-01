import React from 'react';
import '../style/RegLoginModal.css';

const RegistrationModal = (props) => {
    return (
        <div>
            <div className="modal-container"
                style={{
                    display: props.show ? 'block' : 'none',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="header">
                    <h3>Registration</h3>
                    <span className="close-btn" onClick={props.toggle}>&times;</span>
                </div>
                <div className="body">
                    <input className="input-field" placeholder="First name..."></input>
                    <input className="input-field" placeholder="Last name..."></input>
                    <input className="input-field" placeholder="E-mail..."></input>
                    <input className="input-field" placeholder="Username..."></input>
                    <input type="password" className="input-field" placeholder="Password..."></input>
                    <input type="password" className="input-field" placeholder="Confirm password..."></input>
                </div>
                <div className="footer">
                    <button className="btn-cancel" onClick={props.toggle}>Cancel</button>
                    <button className="btn-register">Register</button>
                </div>
            </div>
        </div>
    )
}


export default RegistrationModal;