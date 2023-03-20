import {createContext,useState,useEffect} from "react"

export const Context = createContext();

const AppContext =({children})=> {
    const [products,setProducts] = useState();
    const [randomItem,setRandomItem] = useState()
    const [cartItem,setCartItem]=useState([])
    const [cartSubTotal,setCartSubTotal]=useState(0)

    useEffect(()=>{
        let subtotal = 0
        cartItem.map((e)=>{
            return (subtotal += (e.product.price * e.quantity))
        })
        setCartSubTotal(subtotal)
    },[cartItem])

    const addToCart=(product,quantity)=>{
        let index = cartItem.findIndex((p)=>{
            return p.product.id === product.id
        })
        if(index === -1){
            setCartItem([...cartItem,{product,quantity}])
        } else{
            const newCartItem = [...cartItem]
            newCartItem[index].quantity += quantity
            setCartItem(newCartItem)
        }
    }

    const removeFromCart = (e) => {
        const updatedItems = cartItem.filter((item) => item.product.id !== e.product.id);
        setCartItem(updatedItems);
    };

    const changeQuatity =(e,type)=>{
        let index = cartItem.findIndex((p)=>{
            return p.product.id === e.product.id
        })
        if(type === "inc"){
            const newCartItem = [...cartItem];
            newCartItem[index].quantity += 1;
            setCartItem(newCartItem);
        } else if (type === "dec"){
            if(cartItem[index].quantity === 1){
                removeFromCart(e)
            } else if(cartItem[index].quantity >1){
                const newCartItem = [...cartItem];
            newCartItem[index].quantity -= 1;
            setCartItem(newCartItem);
            }
        }
    }
    return (
        <Context.Provider value={{
            products,
            setProducts,
            randomItem,
            setRandomItem,
            cartItem,
            setCartItem,
            addToCart,
            removeFromCart,
            changeQuatity,
            cartSubTotal,
            }}>
            {children}
        </Context.Provider>
    )
}

export default AppContext;