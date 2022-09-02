import React, {useState} from "react";

import useTask from "../../hooks/useTask";

import TodoForm from "../TodoFrom/TodoForm";
import TodoList from "../TodoList/TodoList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Info from "../Info/Info";

import s from './TodoApp.module.css'
import ToggleAll from "../ToggleAll/ToggleAll";

const TodoApp = () => {
  const {
    todos,
    filteredTodos,
    filter,
    addTodo,
    deleteTodo,
    completeTodo,
    editTodo,
    changeFilter,
    toggleIsComplete,
    deleteCompleted,
  } = useTask();

  const [edit, setEdit] = useState('')

  const visibleItem = !!todos.length;

  const itemsLeft = filteredTodos.filter((todo) => !todo.isCompleted).length;

  const completedTodo = filteredTodos.filter((todo) => todo.isCompleted).length

  return (
    <>
      <Header/>

      <div className={s.container}>
        <section className={s.addForm}>

          {visibleItem && <ToggleAll toggleIsComplete={toggleIsComplete}
                                     itemsLeft={itemsLeft}/>}

          <TodoForm addTodo={addTodo}/>
        </section>

        <TodoList filteredTodos={filteredTodos}
                  completeTodo={completeTodo}
                  deleteTodo={deleteTodo}
                  edit={edit}
                  setEdit={setEdit}
                  editTodo={editTodo}/>

        {visibleItem &&
          <Footer itemsLeft={itemsLeft}
                  changeFilter={changeFilter}
                  filter={filter}
                  deleteCompleted={deleteCompleted}
                  completedTodo={completedTodo}/>}
      </div>

      <Info/>
    </>
  )
}

export default TodoApp;


