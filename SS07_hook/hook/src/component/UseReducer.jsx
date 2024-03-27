import React, { useReducer } from 'react'

export default function UseReducer() {
    const reducer = (state, action) => {
        switch (action) {
            case "increase":
                return state + 1;
            default:
                return state;
        }
    };

    const reducer2 = (state, action) => {
        switch (action) {
            case "deduction":
                return state - 1;
            default:
                return state;
        }
    };

    const [count, dispatch] = useReducer(reducer, 0);
    const [giam, dispatchGiam] = useReducer(reducer2, 0);

    const handleIncrease = () => {
        dispatch("increase");
    };

    const handleDecrease = () => {
        dispatchGiam("deduction");
    };
  return (
    <>
        UseReducer

        {/*
        
        quản lý những State phức tạp
        bản chất cũng giống như useState nhưng dùng để quản lý các State phức tạp
        và có công dụng sau này học redux
        
        */}
        <p>count: {count}</p>
        <p onClick={handleIncrease}><button>Increase</button></p>
        <p>giam: {giam}</p>
        <p onClick={handleDecrease}><button>Decrease</button></p>
    </>
  )
}
