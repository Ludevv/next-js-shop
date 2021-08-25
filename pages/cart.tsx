import * as React from 'react';
import { useStore } from '../src/store/store';
import BackArrow from '../src/components/molecues/BackArrow';
import ProductInCart from '../src/components/molecues/ProductInCart';


const Cart = () => {
    const { cart } = useStore();
    const items = cart.map((item, index) => <ProductInCart key={index} item={item}/>)
    
    return ( 
        <div className="bg-gray-700 p-12 min-h-screen text-white ">
            <BackArrow/>
            <h2 className="text-6xl mb-16 font-extrabold text-center">Shop Cart</h2>
            {items.length > 0 ? items : <p className="text-center">Your cart is empty!</p>}
        </div>
     );
}
 
export default Cart;