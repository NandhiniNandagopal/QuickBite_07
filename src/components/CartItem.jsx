import React from "react";
function CartItem({
    item,
    onIncrease,
    onDecrease,
    onRemove,
}) {
    return(
        <div className="cart-item">
            <img
            src={item.image}
            alt={item.name}
            width="100"
            height="100"
            />
            <div className="cart-item-details"> 
                <h3>{item.name}</h3>
                <p>Price: Rs.{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: Rs.{item.price * item.quantity}</p>
                <button onClick={() => onDecrease(item.id)}>-</button>
                <button onClick={() => onIncrease(item.id)}>+</button>
                <button onClick={() => onRemove(item.id)}>Remove</button>   
            </div>
        </div>
    );
}
export default CartItem;