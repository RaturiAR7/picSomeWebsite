import {useState, useContext } from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems,emptyCart}=useContext(Context)
    const [buttonText, setButtonText] = useState("Place Order")
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order placed!")
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }
    const cartItemElements=cartItems.map(item=>(
        <CartItem key={item.id} item={item}/>
    ))
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total:{totalCostDisplay} </p>
            <div className="order-button">
                {
                     cartItems.length > 0 ?
                     <div className="order-button">
                         <button onClick={placeOrder}>{buttonText}</button>
                     </div> :
                     <p>You have no items in your cart.</p>
                }
            </div>
        </main>
    )
}

export default Cart