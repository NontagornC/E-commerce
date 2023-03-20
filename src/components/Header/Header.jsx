import "./Header.scss";
import { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {TbSearch} from "react-icons/tb"
import {CgShoppingCart} from "react-icons/cg"
import {AiOutlineHeart} from "react-icons/ai"
import Search from "./Search/Search"
import Cart from "../Cart/Cart"

const Header = () => {
    const [scrolled,setScrolled] = useState(false)
    const [showCart,setShowCart] = useState(false)
    const [showSearch,setShowSearch] = useState(false)
    const navigate = useNavigate()
    const handleScroll = () => {
        const offset = window.scrollY
        if(offset>200){
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)
    },[])

    return (
        <>
            <header className={`main_header ${scrolled? "sticky-header" : ""}`}>
                <div className="header_content">
                    <ul className="left"> 
                        <li onClick={()=>navigate("/")}>Home</li>
                        <li>About</li>
                        <li>Category</li>
                    </ul>
                    <div className="center" onClick={()=>navigate("/")}><span>NTG</span>STORE<span>.</span></div>
                    <div className="right">
                        <TbSearch onClick={()=> setShowSearch(true)}/>
                        <AiOutlineHeart/>
                        <span className="cart_icon" onClick={()=>setShowCart(true)}>
                            <CgShoppingCart/>
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearch&&<Search setShowSearch={setShowSearch}/>}
        </>
        );
}

export default Header;
