import "./Product.scss";
import { useNavigate } from "react-router-dom";
const Product = ({id,price,title,img}) => {
    const navigate = useNavigate()
    return (
        <div className="product_card" key={id} onClick={()=>navigate(`/product/${id}`)}>
            <div className="product_card_container">
                <div className="thumbnail">
                    <img src={img} alt="" />
                </div>
                <div className="prod_details">
                    <span className="name">{title}</span>
                    <span className="price">{price} &#36;</span>
                </div>
            </div>
        </div>
    );
};

export default Product;
