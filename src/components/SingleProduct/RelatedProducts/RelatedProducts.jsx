import Products from "../../Products/Products";
import FetchEndPoint from "../../../utils/fetchEndPoind";

const RelatedProducts = ({category}) => {
    const data = FetchEndPoint(`https://fakestoreapi.com/products/category/${category}?limit=4`)
    return (
        <div className="relate_products">
            <Products headingText ="Related Item" products={data}/>
        </div>
        )
};

export default RelatedProducts;
