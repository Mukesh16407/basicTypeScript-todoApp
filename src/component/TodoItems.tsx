import React from 'react'
import { Todo } from '../constant'
import { updateTodo } from '../api'

interface TodoItemProps extends Todo{
  onUpdate:(todo:Todo)=>void
}
export const TodoItems = (props:TodoItemProps) => {

    const handleClick= async()=>{
        let updatedTodos = await updateTodo({
            ...props,status:!props.status
        })
        props.onUpdate(updatedTodos)
    }
  return (
    <div onClick={handleClick}>{props.title} - {props.status ? 'True':'False'}</div>
  )
}
