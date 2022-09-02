import {v4} from "uuid";
import {useCallback, useReducer, useState} from "react";

const reducer = (state, action) => {
  switch (action.type) {

    case 'ADD_TODO':
      return [{
        id: v4(),
        title: action.payload,
        isCompleted: false
      }, ...state];

    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);

    case 'SET_STATUS':
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {...todo, isCompleted: !todo.isCompleted};
        }
        return {...todo};
      });

    case 'EDIT_TODO':
      return state.map(todo => (todo.id === action.payload.id ?
        {...todo, title: action.payload.title} : todo))

    case 'TOGGLE_ALL': {
      const flag = state.some((todo) => !todo.isCompleted);
      return state.map((elem) => ({...elem, isCompleted: flag}));
    }

    case 'DELETE_COMPLETED':
      return state.filter((todo) => !todo.isCompleted);

    default:
      return state
  }
};

const useTask = (initialValue) => {
  const [todos, dispatch] = useReducer(reducer, initialValue = []);
  const [filter, setFilter] = useState('ALL');

  const addTodo = useCallback((value) => {
    dispatch({
      type: 'ADD_TODO',
      payload: value
    });
  }, [dispatch]);

  const deleteTodo = useCallback((id) => {
    dispatch({
      type: 'DELETE_TODO',
      payload: id
    });
  }, [dispatch]);

  const completeTodo = useCallback((id) => {
    dispatch({
        type: 'SET_STATUS',
        payload: id
      }
    );
  }, [dispatch]);

  const editTodo = useCallback((value) => {
    dispatch({
        type: 'EDIT_TODO',
        payload: value
      }
    );
  }, [dispatch]);

  const toggleIsComplete = useCallback(() => {
    dispatch({
      type: 'TOGGLE_ALL'
    });
  }, [dispatch]);

  const deleteCompleted = useCallback(() => {
    dispatch({
      type: 'DELETE_COMPLETED'
    });
  }, [dispatch]);

  const changeFilter = (id) => {
    setFilter(id);
  };

  let filteredTodos = []

  switch (filter) {
    case "ALL": {
      filteredTodos = [...todos];
      break;
    }
    case "ACTIVE": {
      filteredTodos = todos.filter((todo) => !todo.isCompleted);
      break;
    }
    case "COMPLETED": {
      filteredTodos = todos.filter((todo) => todo.isCompleted);
      break;
    }
    default:
      filteredTodos = [...todos];
  }
  return {
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
  };
}

export default useTask;
