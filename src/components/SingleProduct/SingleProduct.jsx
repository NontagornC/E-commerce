import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts"
import {FaFacebookF,FaInstagram,FaLinkedinIn,FaPinterest,FaCartPlus,FaTwitter} from "react-icons/fa"
import { useParams } from "react-router-dom";
import FetchEndPoint from "../../utils/fetchEndPoind";
import { useState,useContext } from "react";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";

const SingleProduct = () => {
    const navigate = useNavigate()
    const {addToCart} = useContext(Context)
    const [quantity,setQuantity] = useState(1)
    const {id} = useParams()
    const endPointData = FetchEndPoint(`https://fakestoreapi.com/products/${id}`)
    if(!endPointData) return;

    const data = endPointData.data
    const increment =()=>{
        setQuantity(quantity+1)
    }
    const decrement =()=>{
        if(quantity===1){
            return quantity
        } else {
            setQuantity(quantity-1)
        }
    }

    return (
        <div className="single_product_main_content">
            <div className="layout">
                <div className="single_product_page" key={id}>
                    <div className="left">
                        <img src={data?.image} alt="product-img"  key={id}/>
                    </div>
                    <div className="right">
                        <span className="name">{data?.title}</span>
                        <span className="price">{data?.price} &#36;</span>
                        <span className="description">{data?.description}</span>

                        <div className="cart_btns">
                            <div className="quantity_btn">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>
                            <button className="add_to_cart_btn" onClick={()=>{
                                addToCart(data,quantity)
                                setQuantity(1)
                            }}>
                                <FaCartPlus size={20}/>
                                ADD TO CART
                            </button>
                        </div>

                        <span className="divider"/>

                        <div className="info_item">
                            <span className="text_bold">
                                Category:
                                <span onClick={()=>navigate(`/category/${data?.category}`)}> {data?.category.toUpperCase()}</span>
                            </span>
                            <span className="text_bold">
                                Share:
                                <span className="social_icons">
                                    <FaFacebookF size={16}/>
                                    <FaTwitter size={16}/>
                                    <FaInstagram size={16}/>
                                    <FaLinkedinIn size={16}/>
                                    <FaPinterest size={16}/>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts category={data?.category} headingText ="Popular Item"/>
            </div>
        </div>
    );
};

export default SingleProduct;
