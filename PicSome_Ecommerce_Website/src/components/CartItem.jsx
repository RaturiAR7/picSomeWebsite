import { Context } from "../Context"
import { useState,useContext } from "react"


const CartItems = ({item}) => {
    const {removeFromCart}=useContext(Context);
    const [hovered, setHovered] = useState(false);
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return ( 
        <div className="cart-item">
            <i  onMouseEnter={() => setHovered(true)}  onMouseLeave={() => setHovered(false)} onClick={()=>removeFromCart(item.id)} className={iconClassName}></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
     );
}
 
export default CartItems;