import "./Category.scss";
import { useNavigate } from "react-router-dom";

const Category = ({randomItem}) => {
    const navigate = useNavigate()
    return (
        <div className="shop_by_category">
            <div className="categories">
                {randomItem && randomItem.map((Item)=>{
                    return( 
                        <div className="container" key={Item.id} onClick={()=>navigate(`/category/${Item.category}`)}>
                            <div className="category" >
                                <img src={Item.image} alt="" />
                            </div>
                            <div className="span_container">
                                <span>{Item.category}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Category;
