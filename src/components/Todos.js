import React from 'react'
import './Todos.css'
const Todos = ({todos}) => {

  return (
    <div className='todo__container'>
        {todos && todos.length>0 && 
            todos.map((todo) => (
                <figure key={todo.id} className='todo__box'>
                    <img className='todo__image' src={todo.url} alt="" />
                    <figcaption className='todo__title'>{todo.title.substr(0,50)}</figcaption>
                </figure>
            ))    
        }
    </div>
  )
}

export default Todos