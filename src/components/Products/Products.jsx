import "./Products.scss";
import Product from "./Product/Product";
const Products = ({innerPage, headingText,products}) => {
    return (
        <div className="products_container">
            {!innerPage && <div className="sec_heading">{headingText}</div>}
            <div className="products">
                {products && products.data.map((item)=>{
                    return (
                        <Product key={item.id} id={item.id} price={item.price} title={item.title} img={item.image} headingText ="You may like this"/>
                    )
                })}
            </div>
        </div>
    )
};

export default Products;
