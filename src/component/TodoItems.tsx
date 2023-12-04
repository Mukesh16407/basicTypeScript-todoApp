import React from 'react'
import { Todo } from '../constant'
import { updateTodo } from '../api'


export const TodoItems = (props:Todo) => {

    const handleClick=()=>{
        let updatedTodos =  updateTodo({
            ...props,status:!props.status
        })
    }
  return (
    <div onClick={handleClick}>{props.title} - {props.status ? 'True':'False'}</div>
  )
}
