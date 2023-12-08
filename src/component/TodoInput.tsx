import React, { useState } from 'react'
import { addTodo } from '../api';
import { Todo } from '../constant';

type TodoInputProps={
    onAdd:(todo:Todo)=>void
}
export const TodoInput = (props:TodoInputProps) => {
    const {onAdd} = props
    const [value,setValue] = useState<string>('');
    
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        let data = await addTodo(false,value)
        onAdd(data);
        setValue("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}> 
            <input type='text' value={value} onChange={handleChange}/>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}
