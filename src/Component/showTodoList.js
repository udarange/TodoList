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
    return todo.isDone ?
        <strike> <font color="LightGrey">{todo.text}</font> </strike>:
        <span> {todo.text} </span>
}

let showTodoList = ({todos, toggleTodo, deleteTodo}) => (
    <div>
        <h3>Show Todo List: <font color="red">{todos.length}</font> items</h3>
        <ul>
            {todos.map((t) => (
                <li key={t.id}>
                    <button onClick={() => toggleTodo(t.id)}>Done</button>
                    <button onClick={() => deleteTodo(t.id)}>Delete</button>
                    <Todo todo={t}/>
                </li>
            ))}
        </ul>
    </div>
);

/* State --> Props */
const mapStateToProps = (state) => ({
    todos: state
});

/* Dispatch --> Props */
const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id))
});

/* generating container component */
showTodoList = connect(mapStateToProps, mapDispatchToProps)(showTodoList)
export default showTodoList

