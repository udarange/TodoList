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

export default function reducer(todos = [], action) {
    switch (action.type) {
        case 'ADD':
            console.log("REDUCER ---> add")
            console.log(todos);
            return [
                ...todos,
                {
                    id: action.id,
                    text: action.text,
                    isDone: false
                }
            ];

        case 'TOGGLE':
            console.log("REDUCER ---> toggle")
            return todos.map(t => {
                if (t.id === action.id) {
                    t.isDone = !t.isDone;
                    return t;
                }
                return t;
            });

        case 'DELETE':
            console.log("REDUCER ---> delete")
            return todos.filter(t => t.id !== action.id)

        default:
            return todos;
    }
}
