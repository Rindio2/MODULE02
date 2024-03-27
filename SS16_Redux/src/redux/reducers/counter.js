const initialCount=0;

export const counter=(state=0, action)=>{
    switch (action.type) {
        case "increase":
            
            return state+1;
    
        default:
            return state;
    }
}