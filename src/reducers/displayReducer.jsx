const displayReducer = (state = 'Pankaj', action) => {
    switch(action.type){
        case 'UPPER':
            return state.toUpperCase();
        case 'LOWER':
            return state.toLowerCase();
        default:
            return state;
    }
}

export default displayReducer;
