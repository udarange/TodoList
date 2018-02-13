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

import {connect} from "react-redux";
import * as components from "./components";
import {addTodo, deleteTodo, toggleTodo} from "./actions";

/**
 * generate container component
 */
export const Container = connect(
    /* State --> Props */
    function mapStateToProps(state) {
        return {todos: state};
    },

    /* Dispatch --> Props */
    function mapDispatchToProps(dispatch) {
        return {
            addTodo: text => dispatch(addTodo(text)),
            toggleTodo: id => dispatch(toggleTodo(id)),
            deleteTodo: id => dispatch(deleteTodo(id))
        };
    }
)(components.TodoList);



