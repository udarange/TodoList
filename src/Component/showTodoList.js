/*
 * (C) Copyright 2010-2018 hSenid Mobile Solutions (Pvt) Limited.
 * All Rights Reserved.
 *
 * These materials are unpublished, proprietary, confidential source code of
 * hSenid Mobile Solutions (Pvt) Limited and constitute a TRADE SECRET
 * of hSenid Mobile Solutions (Pvt) Limited.
 *
 * hSenid Mobile Solutions (Pvt) Limited retains all title to and intellectual
 * property rights in these materials.
 */
/**
 * Created by archana on 2/14/18.
 */
import React from "react";
import {connect} from "react-redux";
import {deleteTodo, toggleTodo} from "../Action/actions";


export function Todo(props) {
    const {todo} = props;
    if (todo.isDone) {
        return <strike> {todo.text} </strike>;
    } else {
        return <span> {todo.text} </span>;
    }
}

let showTodoList = ({todos, toggleTodo, deleteTodo}) => (
    <div>
        <h3>Show Todo List: {todos.length} items</h3>
        <ul>
            {todos.map((t, id) => (
                <li key={id}>
                    <button onClick={() => toggleTodo(t.id)}>Done</button>
                    <button onClick={() => deleteTodo(t.id)}>Delete</button>
                    {/*<input type="checkbox" onChange={() => toggleTodo(t.id)}/>*/}
                    {/*<input type="checkbox" onChange={() => deleteTodo(t.id)}/>*/}
                    <Todo todo={t}/>
                </li>
            ))}
        </ul>
    </div>
);

showTodoList = connect(
    /* State --> Props */
    (state) => ({
        todos: state
    }),

    /* Dispatch --> Props */
    (dispatch) => ({
        toggleTodo: id => dispatch(toggleTodo(id)),
        deleteTodo: id => dispatch(deleteTodo(id))
    })
)(showTodoList)
export default showTodoList

