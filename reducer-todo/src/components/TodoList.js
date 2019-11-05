import React, { useReducer } from 'react';

import {initialState, reducer} from '../reducers/Reducer';


const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="container">
            <h1>Todos!</h1>
            <p>{state.item}</p>
        </div>
    );
}

export default TodoList;