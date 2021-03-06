import React from 'react'
import { Link } from 'react-router-dom'
import './button.css'

function Button(props) {
    return (
        <Link to={props.action ? props.action : '#'} onClick={props.onClickHandler}>
            <button className={`button ${props.width}`}>
                {
                    props.icon ? (
                        <i className={props.icon}/>
                    ) : null
                }
                <span className="button__content">
                    {props.content}
                </span>
            </button>
        </Link>
    )
}

export default Button
