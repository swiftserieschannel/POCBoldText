
const initialState = {
    count:0
}


export const CounterScreenReducer = (state=initialState,action)=>{
    switch (action.type){
        case "INCREAMENT_COUNT":
            return {...state,count:state.count+parseInt(action.payload.count)};
        default:
            return state;
    }
}