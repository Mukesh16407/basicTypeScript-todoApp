import  { useEffect, useState } from 'react'
import { getTodos } from '../api'
import { Todo } from '../constant';
import { TodoInput } from './TodoInput';
import { TodoItems } from './TodoItems';

export const TodosApp = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const onAdd =(todo:Todo)=>{
        setTodos([...todos,todo])
    }

    // const onUpdate =(updatedTodo:Todo)=>{

    //     let updatedTodos = todos.map(todo=>{
    //         if(todo.id) === updatedTodo.id){
    //             return updatedTodo
    //         }
    //         return todo
    //     })
    //     setTodos(updatedTodos)
    // }
    useEffect(()=>{
        getTodos().then(d=>{
            setTodos(d)
        })
    },[]);

    console.log(todos)
  return (
    <div>
        <TodoInput onAdd={onAdd}/>
        {todos?.map(item=>{
            return <TodoItems key={item.id} {...item}  />
        })}
    </div>
  )
}
