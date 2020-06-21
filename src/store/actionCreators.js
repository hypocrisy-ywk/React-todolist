import {
    INPUT_VALUE_CHANGE,
    HANDLE_BTN_CLICK,
    HANDLE_DELETE_LIST,
    INIT_LIST_ACTION
} from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = (value) => ({
    type: INPUT_VALUE_CHANGE,
    value
})

export const getBtnClickAction = () => ({
    type: HANDLE_BTN_CLICK
})

export const getDeleteListAction = (index) => ({
    type:HANDLE_DELETE_LIST,
    index
})

export const initListAction = (data) => ({
    type:INIT_LIST_ACTION,
    data
})

export const getTodoList = () => {
    return (dispatch)=>{
        axios.get('/list.json').then((res)=>{
            const data = res.data;
            const action = initListAction(data);
            console.log(data);
            dispatch(action)
        })
    }
}