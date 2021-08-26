import * as React from 'react';
import { useStore } from '../src/store/store';
import BackArrow from '../src/components/molecues/BackArrow';
import ProductInCart from '../src/components/molecues/ProductInCart';


const Cart = () => {
    const prices: number[] = [];
    const { cart } = useStore();
    cart.map(item => prices.push(Number(item.price))) 
    const total = prices.length > 0 && prices.reduce((x,y) => x + y);
    
    const items = cart.map((item, index) => <ProductInCart key={index} item={item}/>)
    
    return ( 
        <div className="bg-gray-700 p-2 sm:p-12 min-h-screen text-white ">
            <BackArrow/>
            <h2 className="text-6xl mb-16 font-extrabold text-center">Shop Cart</h2>
            {items.length > 0 
            ? 
            <>
            { items }
            <p className="text-right font-extrabold text-4xl">Total: {total}$</p>
            </>
            : 
            <p className="text-center">Your cart is empty!</p>}
        </div>
     );
}
 
export default Cart;