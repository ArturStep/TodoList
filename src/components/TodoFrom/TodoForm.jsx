import {useRef} from "react";

import s from './TodoFrom.module.css';
import {MdKeyboardArrowDown} from "react-icons/md";

const TodoForm = ({addTodo, editTodo, edit}) => {
  const todoRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(todoRef.current.value)
    e.target.reset()
  }

  const editSubmit = (e) => {
    e.preventDefault()
    editTodo(todoRef.current.value)
    e.target.reset()
  }

  return (
    edit ?
      <>
        <form onSubmit={editSubmit}>
          <input type={"text"}
                 autoFocus={true}
                 onBlur={() => editTodo(edit.title)}
                 defaultValue={edit.title}
                 ref={todoRef}
                 className={s.edit}/>
        </form>
      </> : <>
        <form onSubmit={handleSubmit} className={s.addFrom}>
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
