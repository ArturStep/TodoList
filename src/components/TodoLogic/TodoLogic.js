import Todo from "../Todo/Todo";
import {v4} from "uuid";
import {useEffect, useState} from "react";

const TodoLogic = () => {
  const [todos, setTodos] = useState([])
  const [edit, setEdit] = useState('')
  const [filtered, setFilter] = useState(todos)
  const [activeFilter, setActiveFilter] = useState(null)

  useEffect(() => {
      setFilter(todos)},
    [todos]
  )

  const addTodo = (value) => {
    if (value) {
    setTodos([{
      id: v4(),
      title: value,
      isComplete: false
    }, ...todos])
      }
  }

  const editTodo = (value) => {
    if (value) {
      setTodos(prev => prev.map(todo => (todo.id === edit.id ? {id: v4(), title: value} : todo)))
      setEdit('')
    }
  }

  const deleteTodo = (id) => {
    setTodos([...todos].filter(todo => todo.id !== id))
  }

  const completeTodo = (id) => {
    setTodos([...todos].filter(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    }))
  }

  const filteredTodo = (filter = 'all') => {
    if (filter === 'all') {
      setFilter(todos)
      setActiveFilter('all')
    } else  {
      setFilter([...todos].filter(todo => todo.isComplete === filter))
      setActiveFilter(filter ? 'complete' : 'active')
    }
  }

  return (
    <>
      <Todo todos={todos}
            addTodo={addTodo}
            filtered={filtered}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
            editTodo={editTodo}
            setEdit={setEdit}
            edit={edit}
            filteredTodo={filteredTodo}
            activeFilter={activeFilter}
      />
    </>
  )
}

export default TodoLogic;
