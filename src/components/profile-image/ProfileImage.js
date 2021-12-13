import React from 'react'
import './profileImage.css'

function ProfileImage(props) {
    return (
        <div>
            {
                props.profileImage !== undefined ? (
                    <div className="profile__image">
                        <img
                            src={props.profileImage}
                            alt={props.alt}
                        />
                    </div>
                    
                ):(
                    <div className="profile__icon">
                       <i class='bx bxs-user-circle'></i> 
                    </div>
                )
            }
        </div>
    )
}

export default ProfileImage
