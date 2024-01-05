import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{
    //subscribe to the store
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
    }
    const cartItems = useSelector((store) => store.cart.items);
    return <div className="text-center m-4 p-4">
        <h1 className="text-xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
            <button className="bg-gray-100 text-black font-bold rounded-lg m-2 p-2"
            onClick={handleClearCart}
            >
                Clear 🛒</button>
            {cartItems.length ===0 && <h1>No Items in Cart. Add items in cart </h1>}
            <ItemList items={cartItems}/>
        </div>
        </div>
}
export default Cart;