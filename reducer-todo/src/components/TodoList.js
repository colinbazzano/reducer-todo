import React, { useReducer } from 'react';

import Todo from './Todo';

const TodoList = ({state, dispatch}) => {
    const createItems = () => {
        return state.map(todo => <Todo {...todo} dispatch={dispatch}/>)
    };
    console.log(state);
    return (
        <div className="todo-list">
            {createItems()}
        </div>
    );
}

export default TodoList;