import React from 'react'
import './task.css'

function Task({task}) {
    return (
        <div className="task">
            <i className={`bx ${task.complete ? 'bxs-checkbox-checked' : 'bx-checkbox'}`}/>
            <span className={task.complete ? 'strike' : ''}>
                {task.task}
            </span>
        </div>
    )
}

export default Task
