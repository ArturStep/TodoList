import React, {useRef} from "react";

import s from './TodoFrom.module.css';

const TodoForm = ({addTodo, editTodo, edit, setEdit}) => {
  const todoRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(todoRef.current.value)
    e.target.reset()
  }

  const editSubmit = (e) => {
    e.preventDefault()
    editTodo({
      id: edit.id,
      title: todoRef.current.value
    })
    setEdit('')
    e.target.reset()
  }

  const handleBlur = () => {
    editTodo({
      id: edit.id,
      title: edit.title
    })
    setEdit('')
  }

  return (
    edit ?
      <>
        <form onSubmit={editSubmit}>
          <input type={"text"}
                 autoFocus={true}
                 onBlur={handleBlur}
                 defaultValue={edit.title}
                 ref={todoRef}
                 className={s.edit}/>
        </form>
      </> : <>
        <form onSubmit={handleSubmit}>
          <input type={"text"}
                 autoFocus={true}
                 placeholder={'Whats needs to be done?'}
                 ref={todoRef}
                 className={s.addInput}/>
        </form>
      </>
  )
}

export default TodoForm;
