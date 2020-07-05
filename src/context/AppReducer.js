//A reducer is how we specify the application state changes in response to certain actions to our context (our store of data)

export default (state, action) => {
    console.log('In reducer');
    console.log(action.payload);
    switch(action.type) {
        case 'UPDATE_DATA':
            console.log('This is the state');
            console.log(state);
            // let newState = [...state];
            // console.log('theNew state');
            // console.log(newState);
            // console.log(state.barData.datasets[0].data)
            state.barData.datasets[0].data = action.payload
            return {
                ...state
            }
        default:
            return state;
    }
}