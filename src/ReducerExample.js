import React, { useReducer } from 'react'

export default function SimpleCart() {

    const reducer = (state, action) => {
        const newState = [...state]
        switch (action.type) {
            case "Add A":
                newState.push(action.product);
                return newState;

            case "Add B":
                newState.push(action.product);
                return newState;

            case "Remove":
                newState.splice(action.index, 1);
                return newState;

            default:
                return;
        }
    }

    const [cart, dispatch] = useReducer(reducer, []);
    return (
        <div>Cart
        <button onClick={() => dispatch({
            type: "Add A",
            product:{
                name: "Item A"
            }
        })}>Add Item A</button>
        <button onClick={() => dispatch({
            type: "Add B",
            product:{
                name: "Item B"
            }
        })}>Add Item B</button>
        {
            cart && cart.map((item, index) => {
                return (
                    <div>
                        {item.name}
                        <button onClick={() => dispatch({
                            type: "Remove",
                            index: index
                        })}>Remove</button>
                    </div>
                );
            })
        }</div>
    )
}