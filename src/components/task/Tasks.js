import React, { useState } from 'react'
import Task from './Task';

function Tasks({data, handleTaskState}) {
    const [tasks, setTasks] = useState(data);

    return (
        <div>
            {
                data.map((item) => (
                    <div key={item.id} onClick={() => handleTaskState(item.id)}>
                        <Task task={item}/>
                    </div>
                ))
            }
        </div>
    )
}

export default Tasks
