import React, { useState, useEffect } from 'react'
import './sidebar.css'
import sidebar_items from '../../assets/JsonData/sidebar_routes.json'
import { Link } from 'react-router-dom'

const SidebarItem = (props) => {
    const active = props.active ? 'active' : '';

    return (
        <div className="sidebar__item">
            <div
                className={`sidebar__item-inner ${active}`}
            >
                <i className={props.icon}/>
                {
                    props.menuToggle ? (
                        <span>
                            {props.title}
                        </span>
                    ) : null
                }
            </div>
        </div>
    )
}

function Sidebar(props) {
    const [activeMenu, setActiveMenu] = useState();
    const activeItem = activeMenu
    
    const imageToggle = props.menuToggle ? "toggle" : "";

    useEffect(() => {
        setActiveMenu(sidebar_items.findIndex(item => item.route === window.location.pathname));
    }, [activeItem])

    return (
        <div className="sidebar">
            <div className={`sidebar__logo ${imageToggle}`}>
                <img src="https://res.cloudinary.com/emacon-production/image/upload/v1638855626/samples/bus-png-30663_gul0nu.png" alt=""/>
            </div>
            {
                sidebar_items.map((item, index) => (
                    <Link key={index} to={item.route}>
                        <SidebarItem
                            menuToggle={props.menuToggle}
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                        />
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar
