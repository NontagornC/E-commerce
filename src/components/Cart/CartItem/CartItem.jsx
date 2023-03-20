import "./CartItem.scss";
import {MdClose} from "react-icons/md"
import { Context } from "../../../utils/context";
import { useContext } from "react";

const CartItem = () => {
    const {cartItem,removeFromCart,changeQuatity} = useContext(Context)
    return (
        <div className="cart_products">
            {cartItem.map((e)=>{
                return (
                    <div key={e.product.id} className="cart_product">
                        <div className="img_container">
                            <img src={e.product.image} alt="img" />
                        </div>
                        <div className="product_details">
                            <span className="name">{e.product.title}</span>
                            <MdClose className="close_btn" onClick={()=>{
                                removeFromCart(e)
                            }}/>
                            <div className="quantity_btn">
                                <span onClick={()=>{
                                    changeQuatity(e,"dec")
                                }}>-</span>
                                <span>{e.quantity}</span>
                                <span onClick={()=>{
                                    changeQuatity(e,"inc")
                                }}>+</span>
                            </div>
                            <div className="text">
                                <span>{e.quantity}</span>
                                <span>x</span>
                                <span className="highlight">{e.product.price*e.quantity} &#36;</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default CartItem;
