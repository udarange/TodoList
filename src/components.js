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
 * Created by archana on 2/9/18.
 */

import React from "react";

export function Todo(props) {
    const {todo} = props;
    if (todo.isDone) {
        return <strike>{todo.text}</strike>;
    } else {
        return <span>{todo.text}</span>;
    }
}

export function TodoList(props) {
    /* all props in container */
    const {todos, toggleTodo, addTodo, deleteTodo} = props;


    const onSubmit = (e) => {
        const input = e.target;
        const text = input.value;

        if (e.which === 13) {
            input.value = '';
            addTodo(text);
        }
    };

    return (
        <div>

            <h1>ToDos App</h1>
            <input type='text'
                   placeholder='Add todo'
                   onKeyDown={onSubmit}/>

            <ul>
                {todos.map(t => (
                    <li key={t.get('id')} className='todo__item'>
                        <input type="checkbox" onChange={() => toggleTodo(t.get('id'))}/>
                        <input type="checkbox" onChange={() => deleteTodo(t.get('id'))}/>
                        <Todo todo={t.toJS()}/>
                    </li>

                ))}
            </ul>


        </div>
    );
}

