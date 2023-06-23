const initialData={
    count:11,
    data:600
}

// const counterReducer=(state={count:0},action)=>{
    const counterReducer=(state=initialData,action)=>{
        switch(action.type){
            case"INCREASE Count":
            return{...state,count:++state.count}

            case"DECREASE Count":
            return{...state,count:--state.count}

            case"RESET Count":
            return{...state,count:state.count=12}

            case"INCREASE data":
            return{...state,data:++state.data}

            case"DECREASE data":
            return{...state,data:--state.data}

            case"RESET data":
            return{...state,data:state.data=600}
        
        default:return state
}
}

export default counterReducer