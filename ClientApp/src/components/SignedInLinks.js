import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'></NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1"><i class="material-icons">
                perm_identity
            </i>
            </NavLink></li>
        </ul>
    )
}

export default SignedInLinks;