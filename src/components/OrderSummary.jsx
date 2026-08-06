import React, {useMemo} from "react";
function OrderSummary({cart}){
    const subtotal=useMemo(()=>{
        return cart.reduce((total,item)=>{return total+item.price*item.quantity;},0);
    }, [cart]);
    const deliveryCharge=subtotal>0?40:0;
    const gst=useMemo(()=>{
        return subtotal*0.05;
    }, [subtotal]);
    const grandTotal=useMemo(()=>{
        return subtotal+deliveryCharge+gst;
    }, [subtotal, deliveryCharge, gst]);
    return(
        <div className="order-summary">
            <h2>Order Summary</h2>
            <p>Subtotal: Rs.{subtotal.toFixed(2)}</p>
            <p>Delivery Charge: Rs.{deliveryCharge.toFixed(2)}</p>
            <p>GST (5%): Rs.{gst.toFixed(2)}</p>
            <h3>Grand Total: Rs.{grandTotal.toFixed(2)}</h3>
        </div>
    );      
}
export default OrderSummary;