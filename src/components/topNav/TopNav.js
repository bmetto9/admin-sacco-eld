import React from 'react'
import MenuToggle from '../menu-toggle/MenuToggle'
import Wrapper from '../wrapper/Wrapper'
import './topNav.css'
import Dropdown from '../dropdown/Dropdown'
import { Link } from 'react-router-dom'
import app from '../../helpers/firebaseConf'

import user_menu from '../../assets/JsonData/user_menus.json'
import notifications from '../../assets/JsonData/notification.json'
import ThemeMenu from '../thememenu/ThemeMenu'

const curr_user = {
    display_name: "Victor Githui",
    image: 'https://res.cloudinary.com/emacon-production/image/upload/v1627045050/Victor%20Githui%20Portfolio/DSC_4223_oypfrm.jpg'
}

const renderUserToggle = (user) => (
    <div className="topnav__rigth-user">
        <div className="topnav__rigth-user-image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__rigth-user-name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu = (item, index) => (
    <Link to={item.targetLink} key={index} onClick={() => app.auth().signOut()}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)

function TopNav(props) {
    return (
        <div className="topnav">
            <Wrapper position='center'>
                <MenuToggle toggle={props.handleToggleMenu}/>

                <div className="topnav__search">
                    <input type="text" placeholder="Search here..." />
                    <i className="bx bx-search"/>
                </div>
            </Wrapper>

            <div className="topnav__right">
                <div className="topnav__right-item">
                    <Dropdown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={user_menu}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    />
                </div>
                
            </div>
        </div>
    )
}

export default TopNav
