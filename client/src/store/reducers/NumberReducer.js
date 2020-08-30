const initialtate = {
    number: 7
}

const NumberReducer = (state = initialtate.number, action) =>{
    console.log(state,'66666')
    switch (action.type) {
        case "INCREMENT":
            return state + action.payload;
        default:
            return state;
    }
}

export default NumberReducer;