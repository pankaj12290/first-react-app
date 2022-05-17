import React, { useReducer, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Hooks useReducer Example

function reducer(todos, action) {
    console.log(action);
    switch (action.type) {
        case 'add_todo':
            return [...todos, newToDo(action.payload.newItem)];
        case 'delete_todo':
            return todos.filter((todo) => {
                return todo.id !== action.payload.id;
            });
        case 'toggle':
            return todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo;
            });
    }
}

function newToDo(item) {
    return { id: Date.now(), item: item, complete: false };
}

const ToDoApp = () => {
    const [todos, dispatch] = useReducer(reducer, []);
    const [item, setItem] = useState('');
    const submitForm = (event) => {
        event.preventDefault();
        dispatch({ type: 'add_todo', payload: { newItem: item } });
        setItem('');
        console.log(todos);
    }

    return (
        <div className='row'>
            <div className="d-flex justify-content-center">
                <div className="card border-warning">
                    <div className="card-header">
                        <form onSubmit={submitForm}>
                            <input type="text" className="form-control" value={item} onChange={(event) => setItem(event.target.value)} />
                        </form>
                    </div>
                    <div className="card-body text-warning">
                        {
                            todos.map((currElem) => {
                                return <span key={currElem.id} className={currElem.complete ? `d-block p-2 bg-light text-black mb-1` : `d-block p-2 bg-dark text-white mb-1`}>
                                    {currElem.item}
                                    <span style={{ textAlign: "right", float: "right" }}>
                                        <FontAwesomeIcon style={{ padding: "2px", cursor: "pointer" }} onClick={() => { dispatch({ type: 'toggle', payload: { id: currElem.id } }) }} icon="check" />
                                        <FontAwesomeIcon style={{ padding: "2px", cursor: "pointer" }} onClick={() => { dispatch({ type: 'delete_todo', payload: { id: currElem.id } }) }} icon="trash" />
                                    </span>
                                </span>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDoApp
