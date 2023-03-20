import "./Cart.scss";
import {MdClose} from "react-icons/md";
import {BsCartX} from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import { Context } from "../../utils/context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


const Cart = ({setShowCart}) => {
    const {cartSubTotal,cartItem} = useContext(Context)
    const navigate = useNavigate()
    return (
        <div className="cart_panel">
            <div className="layer"></div>
            <div className="cart_content">
                <div className="cart_header">
                    <span className="header">Shopping Cart</span>
                    <span className="close_btn" onClick={()=>setShowCart(false)}>
                        <MdClose />
                        <span className="text">close</span>
                    </span>
                </div>

                { cartItem.length === 0 &&<div className="empty-cart">
                    <BsCartX/>
                    <span>No products in the cart.</span>
                    <button className="return_btn" onClick={()=>{
                        navigate(`/`)
                        setShowCart(false)
                        }}>RETURN TO SHOP</button>
                </div>}

                <>
                    <CartItem/>
                    <div className="cart_footer">
                        <div className="subtotal">
                            <span className="text">Subtotal:</span>
                            <span className="text total">{cartSubTotal} &#36;</span>
                        </div>
                        <div className="button">
                            <button className="checkout_btn">Checkout</button>
                        </div>
                    </div>
                </>
                
            </div>
        </div>
    );
};

export default Cart;
