import React, { useState } from 'react'
import './dropdownBtn.css'

function DropdownBtn(props) {
    const [showMenu, setShowMenu] = useState(false)

    const handleOnClick = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className="dropdown">
            {
                props.progressPercentage === 100 ? (
                    <button
                        className={`dropbtn ${props.status === 'Complete' ? 'complete' : ''}`}
                    >
                        {props.status}
                    </button>
                ) : (
                    <React.Fragment>
                        <button 
                            onClick={handleOnClick} 
                            className={`dropbtn ${props.status === 'Ongoing' ? 'ongoing' : ''} ${props.status === 'On Hold' ? 'onhold' : ''} ${props.status === 'Complete' ? 'complete' : ''}`}
                        >
                            {props.status}
                            <i class='bx bxs-chevron-down'></i>
                        </button>

                        <div id="myDropdown" className={`dropdown-content ${showMenu ? 'show' : ''}`}>
                            <a 
                                href="#" 
                                onClick={() => {
                                    props.ongoing();
                                    handleOnClick();
                                }}
                            >
                                Ongoing
                            </a>

                            <a 
                                href="#" 
                                onClick={() => {
                                    props.onHold();
                                    handleOnClick();
                                }}
                            >
                                On Hold
                            </a>
                        </div>
                    </React.Fragment>
                )
            }
        </div>
    )
}

export default DropdownBtn
