import React, { useReducer } from 'react';
import './App.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import {initialState, reducer} from './reducers/Reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <nav>
      <h1>Todo List!</h1>
      </nav>
      <TodoForm dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
