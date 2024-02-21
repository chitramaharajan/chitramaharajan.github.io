const defaultState = {
    username:"",
    password:""

}

function Reducer(state=defaultState,action){
    switch (action.type){
        case"Register":
        return{...state,username:action.payload.username,password:action.payload.password}
        default:
            return state;
    }
}

export default Reducer;