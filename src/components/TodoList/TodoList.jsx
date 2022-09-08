import React from "react";
import {ImCheckmark, ImCross} from "react-icons/im";

import TodoForm from "../TodoFrom/TodoForm";

import s from "./TodoList.module.css";

const TodoList = ({filteredTodos, completeTodo, deleteTodo, edit, setEdit, editTodo}) => {
  return (
    <div>
      {filteredTodos.map(todo =>
        edit.id === todo.id ?
          <TodoForm edit={edit} editTodo={editTodo} setEdit={setEdit} key={edit.id}/> :
          <li className={s.todoItem} key={todo.id}>
            <div className={s.todoList}>
              <ImCheckmark className={todo.isCompleted ? s.completedTodo : s.uncompletedTodo}
                           onClick={() => completeTodo(todo.id)}/>
              <h2 className={todo.isCompleted ? s.itemTitleCompleted : s.itemTitle}
                   onDoubleClick={() => setEdit({id: todo.id, title: todo.title})}>
                {todo.title}
              </h2>
              <ImCross className={s.delete} onClick={() => deleteTodo(todo.id)}/>
            </div>
          </li>
      )}
    </div>
  )
}

export default TodoList;
