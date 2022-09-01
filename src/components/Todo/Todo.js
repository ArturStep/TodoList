import TodoForm from "../TodoFrom/TodoForm";

import s from './Todo.module.css'
import {ImCheckmark, ImCross} from "react-icons/im";
import {MdKeyboardArrowDown} from "react-icons/md";

const Todo = ({
                filtered,
                todos,
                addTodo,
                deleteTodo,
                completeTodo,
                editTodo,
                edit,
                setEdit,
                filteredTodo,
                activeFilter
              }) => {

  return (
    <>
    <header className={s.header}>todos</header>
  <div className={s.container}>
    <section className={s.addForm}>
    <MdKeyboardArrowDown className={s.toggleAll}/>
    <TodoForm addTodo={addTodo}/>
    </section>
      {
        filtered.map(todo =>
          <li className={edit.id === todo.id ? s.editTodoItem : s.todoItem} key={todo.id}>
            {
              edit.id === todo.id ?
                <TodoForm edit={edit} editTodo={editTodo} setEdit={setEdit}/>
                :
                <div className={s.todoList}>
                  <ImCheckmark className={todo.isComplete ? s.completed : s.uncompleted}
                               onClick={() => completeTodo(todo.id)}/>
                  <div className={todo.isComplete ? s.itemTitleCompleted : s.itemTitle}
                       onDoubleClick={() => setEdit({id: todo.id, title: todo.title})}>
                    {todo.title}
                  </div>
                  <ImCross className={s.delete} onClick={() => deleteTodo(todo.id)}/>
                </div>
            }
          </li>
        )
      }
      {!todos.length ||
        <footer className={s.footer}>
          <div>{todos.length} items left</div>
          <section className={s.buttons}>
          <button className={activeFilter === 'all' ? s.filterBtnActive : s.filterBtn}
                  onClick={() => filteredTodo('all')}>All</button>
          <button className={activeFilter === 'active' ? s.filterBtnActive : s.filterBtn}
                  onClick={() => filteredTodo(false)}>Active</button>
          <button className={activeFilter === 'complete' ? s.filterBtnActive : s.filterBtn}
                  onClick={() => filteredTodo(true)}>Completed</button>
          </section>
        </footer>}
    </div>
      <p className={s.info}>Double-click to edit a todo</p>
    </>
  )
}

export default Todo;


