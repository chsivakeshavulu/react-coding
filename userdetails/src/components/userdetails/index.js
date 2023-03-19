import React, {useState, useEffect} from 'react';

import './index.css'

function UserDetails({ userId, todoId , todoTitle  }) {
    const [userdata, setUserData] = useState()

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response =>response.json())
        .then(data =>setUserData(data));
    })

    // console.log(userdata)

    return(
        <div className='userdetails-container'>
            <h4 className='h4'>User details </h4>
            
            <div className='userdetails-card'>
            {userdata && (
                    <>
                        <p><strong>ToDo ID:</strong> {todoId}</p><br/>
                        <p><strong>ToDo Title:</strong> {todoTitle}</p><br/>
                        <p><strong>Name:</strong> {userdata.name}</p><br/>
                        <p><strong>Email:</strong> {userdata.email}</p><br/>
                        <p><strong>Phone:</strong> {userdata.phone}</p><br/>
                        <p><strong>Website:</strong> {userdata.website}</p>
                    </>
                )}
            </div>

        </div>
        
    )
}

export default UserDetails;