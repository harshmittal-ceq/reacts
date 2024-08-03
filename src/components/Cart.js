import { useSelector,useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart =()=>{

    //if we cant subscribe to right portion of store then it leads to performance issue
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart())
    }

    return(
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="w-6/12 m-auto">
            <button 
                onClick = {handleClearCart}
                className="p-2 m-2 bg-black text-white rounded-lg">
                Clear Cart
            </button>
            {cartItems.length ===0 && <h1> Cart is Empty. Add Items to the cart</h1>}
            <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart