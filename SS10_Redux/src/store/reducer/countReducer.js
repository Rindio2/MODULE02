// reducer là những hàm nhiệm vụ tính toán lại state mới
const initialState = ["Hoa" ,"Hồng"];

export const countReducer = (state = initialState, action) => {
    switch (action.type) { // Access action.type to determine the action
        case "increase":
            let newState=[...state];
            newState.push(3);
            return newState;
        case "decrease":
            return state - 1;
        default:
            return state;
    }
}