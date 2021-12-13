import React, { useRef } from 'react'
import './menuToggle.css'
import sidebar_items from '../../assets/JsonData/sidebar_routes.json'
import { Link } from 'react-router-dom'

const clickOutsideRef = (content_ref, toggle_ref) => {
    document.addEventListener('mousedown', (e) => {
        // user click toogle
        if (toggle_ref.current && toggle_ref.current.contains(e.target)){
            content_ref.current.classList.toggle('active')
        } else {
            // user click outside toggle and content
            if (content_ref.current && !content_ref.current.contains(e.target)){
                content_ref.current.classList.remove('active')
            }
        }
    })
}

const SidebarItem = props => {
    const active = props.active ? "active" : ""

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active} `}>
                <i className={props.icon}/>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

function MenuToggle(props) {
    const activeItem = sidebar_items.findIndex(item => item.route === window.location.pathname)

    const menu_ref = useRef(null);
    const menu_toggle_ref = useRef(null);

    clickOutsideRef(menu_ref, menu_toggle_ref);

    const setActiveMenu = () => menu_ref.current.classList.add('active');
    const closeMenu = () => menu_ref.current.classList.remove('active');
    
    return (
        <div>
            <a 
                href="#" 
                className="sidebar__toggle" 
                onClick={() => {
                        props.toggle()
                        setActiveMenu()
                    }
                }
            >
                <i class='bx bx-menu'></i>
            </a>

            <div className="menu" ref={menu_ref}>
                <button 
                    className="menu__close"
                    onClick={() => closeMenu()}
                >
                    <i className="bx bx-x"></i>
                </button>

                <div className={`sidebar__logo `}>
                    <img src="https://res.cloudinary.com/emacon-production/image/upload/v1611845838/Emacon%20Production/Emacon_logo_black_ezawgd.png" alt="Company Logo"/>
                </div>
                {
                    sidebar_items.map((item, index) => (
                        <Link key={index} to={item.route} onClick={() => closeMenu()}>
                            <SidebarItem
                                title={item.display_name}
                                icon={item.icon}
                                active={index === activeItem}
                            />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default MenuToggle
