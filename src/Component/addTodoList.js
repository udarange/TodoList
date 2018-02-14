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
import { connect } from 'react-redux'
import { addTodo } from '../Action/actions'

let AddTodoList = ({dispatch}) => (
    <div>
        <h1><font color="brown">ToDos App</font></h1>
        <input type='text'
               placeholder='Add Todo'
               onKeyDown={e => {
                   const input = e.target;
                   const text = input.value;

                   if (e.which === 13) {
                       input.value = '';
                       dispatch(addTodo(text));
                   }
               }}/>
    </div>
);

AddTodoList = connect()(AddTodoList)
export default AddTodoList

