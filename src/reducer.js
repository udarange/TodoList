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

import {List, Map} from "immutable";

const init = List([]);

export default function reducer(todos = init, action) {
    switch (action.type) {
        case 'ADD':
            return todos.push(Map(action.payload));
        case 'TOGGLE':
            console.log(">>>>>>>>>")
            todos.map(e => console.log(e.toJS()))

            return todos.map(t => {
                if (t.get('id') === action.payload) {
                    return t.update('isDone', isDone => !isDone);
                } else {
                    return t;
                }
            });
        case 'DELETE':
            return todos.splice(action.payload,1);
        default:
            return todos;
    }
}
