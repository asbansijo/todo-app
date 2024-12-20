import React, {useState} from 'react'

export const EditForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);
    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id);

        setValue("");
    }
  return (
    <form className='TodoFrom' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn edit-btn'>Update task</button>
    </form>
  )
}