import "./Category.scss";
import Products from "../Products/Products";
import { useParams } from "react-router-dom";
import FetchEndPoint from "../../utils/fetchEndPoind";

const Category = () => {
    const {id} = useParams()
    const endPointData = FetchEndPoint(`https://fakestoreapi.com/products/category/${id}`)
    return (
        <div className="category_main_content">
            <div className="layout">
                <div className="category_title">{id.toUpperCase()}</div>
                <Products innerPage={true} products={endPointData}/>
            </div>
        </div>
    )
};

export default Category;
