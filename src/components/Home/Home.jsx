import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "../Home/Category/Category";
import Products from "../Products/Products";
import About from "../aboutUs/AboutUs";
import { useEffect,useContext } from "react";
import fetchData from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
    const {randomItem,setRandomItem} = useContext(Context)
    const {products,setProducts} = useContext(Context)
     useEffect(()=>{
        getRandomItem()
        getAllItem()
        // eslint-disable-next-line
    },[])
    const getRandomItem=()=>{
        const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];
        const promises = categories.map((category) =>
            fetchData(`https://fakestoreapi.com/products/category/${category}?limit=1`)
            .then((result) => result.data[0])
            .catch((error) => console.log(error))
        );
        Promise.all(promises).then((items) => {
                setRandomItem(items)
            });
        };
    // const getRandomItem=()=>{
    //     fetchData(`https://fakestoreapi.com/products?limit=4`).then((result)=>{
    //         setRandomItem(result)
    //         console.log("1",result);
    //     }).catch((error)=>console.log(error))
    // }
    const getAllItem=()=>{
        fetchData(`https://fakestoreapi.com/products`).then((result)=>{
            setProducts(result)
        }).catch((error)=>console.log(error))
    }
    return (
        <div className="home">
            <Banner/>
            <About/>
            <div className="main_content">
                    <div className="container first">
                        <h3>Shop by <span>Category</span></h3>
                        <div className="layout">
                            <Category randomItem={randomItem}/>
                        </div>
                    </div>
                    <div className="container">
                        <div className="layout">
                            <Products  products={products} headingText ="Popular Item"/>
                        </div>
                    </div>
            </div>
        </div>
        )
        ;
};

export default Home;
