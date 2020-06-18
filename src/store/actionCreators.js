import { INPUT_VALUE_CHANGE , HANDLE_BTN_CLICK, HANDLE_DELETE_LIST } from './actionTypes'

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