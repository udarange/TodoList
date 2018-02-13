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

let nextTodoId = 0

export function addTodo(text) {
    return {
        type: 'ADD',
        id: nextTodoId++,
        text
    };
}

export function toggleTodo(id) {
    return {
        type: 'TOGGLE',
        id
    };
}

export function deleteTodo(id) {
    return {
        type: 'DELETE',
        id
    };
}