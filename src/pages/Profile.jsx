import React, { useContext } from 'react';
import mountains from '../assets/mountains.jpg';
import AuthContext from '../auth/authContext';
import { Link } from 'react-router-dom';

function Profile(props) {
    const { user} = useContext(AuthContext);


    return (
        <div className="int pt-5  ">
            <div className='tx'><h1>Profile</h1></div>
            <div className='container bg-primary '>
                        <div className="  inner bg-primary text-white ">
                            
                          <img className='mountains' src={mountains} alt="img"></img>
                        
                         <div className='bgt'>
                        <h3 className=' bgt3 d-flex text-white'>{user?.name}</h3>
                        <h3 className='text-white'>08/11/2001 </h3>
                        <h3 className='text-white'>Male</h3>
                        <h3 className='text-white'>+91 1234567890</h3>
                        <h3 className='text-white'>Web Developer</h3>

<Link className='btn btn-danger ' to='/edit-profile'> edit </Link>        

                        </div>
         
                        </div>
        </div>
         </div>


               
    );
}

export default Profile;