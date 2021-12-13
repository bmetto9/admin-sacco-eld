import React from 'react'
import Wrapper from '../components/wrapper/Wrapper'

function Profile() {
    return (
        <div>
            <h2 className='page-header'>
                Profile
            </h2>

            <Wrapper position="center">
                <div className='card'>
                    <p>Company Name: Eldoret Express</p>
                    <p>Phone Number: 0712345678</p>
                    <p>Email Address: victorgithuim@gmail.com</p>
                </div>
            </Wrapper>
        </div>
    )
}

export default Profile
