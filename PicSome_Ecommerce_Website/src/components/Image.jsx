import { useState } from "react";
import { Context } from "../Context"
import { useContext } from "react"
import PropTypes from 'prop-types';


const Image = ({className,img}) => {
    const {handleToggle,addToCart,removeFromCart,cartItems}=useContext(Context)
    const [hovered,setHovered]=useState(false);
    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => handleToggle(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => handleToggle(img.id)}></i>
        }
    }
    function cartIcon(){
        if(cartItems.includes(img))
        {
            return <i onClick={()=>removeFromCart(img.id)} className="ri-shopping-cart-fill cart"></i>;
        }
        else if(hovered)
        {
            return <i onClick={()=>addToCart(img)} className="ri-add-circle-line cart"></i>;
        }
    }
   



    return ( 
        <div className={`${className} image-container`}>
            <img onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} src={img.url} className="image-grid" alt="" />
            {heartIcon()}
            {cartIcon()}

        </div>
     );
}
 
Image.propTypes = {
    className: PropTypes.string,
    img:PropTypes.shape({
        id:PropTypes.string.isRequired,
        url:PropTypes.string.isRequired,
        isFavorite:PropTypes.bool
    })
  };

export default Image;