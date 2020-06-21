const defaultState = {
    inputValue:'123',
    list:[1,2]
}

export default ( state = defaultState , action ) => {
    if(action.type === 'init_list_action') {
         const newState = JSON.parse(JSON.stringify(state));
         newState.list = action.data;
         return newState
    }
    if(action.type === 'input_value_change'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState
    }
    if(action.type === 'handle_btn_click'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        action.inputValue = '';
        return newState
    }
    if (action.type === 'handle_delete_list') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index , 1)
        return newState
    }
    return state
}