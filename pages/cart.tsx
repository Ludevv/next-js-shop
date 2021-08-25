import * as React from 'react';
import { useStore } from '../src/store/store';
import Image from "next/image";
import Link from 'next/link';
import { MdDeleteForever } from 'react-icons/md';



const Cart = () => {
    const { cart, removeFromCart } = useStore();

	const handleRemoveFromCart = (id: string) => {
		removeFromCart(id)
	}

    const items = cart.map(item => <ul key={item.id}>
        <li>
            <Image src={item.image} alt={item.name} width={50} height={50}/>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <MdDeleteForever onClick={() => handleRemoveFromCart(item.id)}/>
        </li>
    </ul>)
    
    return ( 
        <>
        <Link href="/">Go back</Link>
        <h2>Shop Cart</h2>
        {items.length > 0 ? items : <p>Your cart is empty!</p>}
        </>
     );
}
 
export default Cart;