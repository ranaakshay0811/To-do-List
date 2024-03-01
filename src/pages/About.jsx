import React, { useContext } from 'react';
import authContext from '../auth/authContext';

function About(props) {
    const text = useContext(authContext)
    return (
        <div>
            About
        </div>
    );
}

export default About;