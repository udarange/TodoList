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
        // return <span></span>;
    }
}

export function TodoList(props) {
    const {todos, toggleTodo, addTodo, deleteTodo} = props;


    const onSubmit = (event) => {
        const input = event.target;
        const text = input.value;
        const isEnterKey = (event.which === 13);
        const isLongEnough = text.length > 0;

        if (isEnterKey && isLongEnough) {
            input.value = '';
            addTodo(text);
        }
    };

    const toggleClick = id => event => toggleTodo(id);
    const deleteClick = id => event => deleteTodo(id);

    return (
        <div className='todo'>

            <input type='text'
                   className='todo__entry'
                   placeholder='Add todo'
                   onKeyDown={onSubmit}/>
            <button type="submit"> Add Todo</button>
            {/*should be added from*/}

            <ul className='todo__list'>
                {todos.map(rec => (

                    <li key={rec.get('id')} className='todo__item'>
                        <input type="checkbox" onChange={toggleClick(rec.get('id'))}/>
                        <input type="checkbox" onChange={deleteClick(rec.get('id'))}/>
                        <Todo todo={rec.toJS()}/>
                    </li>

                ))}
            </ul>


        </div>
    );
}

