import React from 'react';

function EditProfile(props) {
    return (
        <div className='container bg-white'>
            <div className="  bg-success" >
                    
                 <h3 className='d-flex align-items-center'>
                     Edit Your Profile</h3></div>

                 <div className="box bg-warning align-items-center">
                    <div className='pt-2 pl-2'>
                   <h3> 1. Enter Name:-</h3> <input className ="m-3" type="text" placeholder='First Name' required /> 
                    <input  type=" text" placeholder='Last Name' />
                    <h3>2. Enter D.O.B:- </h3> <input className ="m-3" type="date" required />
                    </div>
                    <div className='mt-2'>
                    <h3>  3. Enter Gender :-</h3>  <input className ="m-3" type="text"  required/>
                    </div>
                    <div className='mt-2'>
                    <h3> 3. Mobile Number :-</h3>  <input  className ="m-3" type="number" required />
                    </div><div className='mt-2'>
                    <h3> 3. Enter E-mail :- </h3> <input className ="m-3" type="email" required />
                    </div>

                 </div>
                 
                 

    
            

        
        </div>
    );
}

export default EditProfile;