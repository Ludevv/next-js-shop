import * as React from 'react';
import { useState } from 'react';
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from 'next/link'
import SearchBar from '../src/components/atoms/SearchBar';
import { useStore } from '../src/store/store';
import CartIcon from '../src/components/atoms/CartIcon';

const Main = ({ products }) => {
	const { cart, addToCart } = useStore();
	const [searchProductName, setSearchProductName] = useState("");

	const handleSearchProducts = (productName: string) => {
		setSearchProductName(productName);
	}

	const handleAddToCart = (id: string, name: string, price: string, image: string) => {
		const item = {
			id,
			name,
			price,
			image,
		}
		addToCart(item)
	}


	const fiteredProducts = products.filter(product => product.name.toLowerCase().includes(searchProductName));

	const showProducts = fiteredProducts.map(product => 
		<div key={product.id}>
			<p>{product.name}</p>
			<Image src={product.image} alt={product.name} width={150} height={150} />
			<p>{product.price}</p>
			<Link href={'/products/' + product.slug}>See more</Link>
			<button onClick={() => handleAddToCart(product.id, product.name, product.price, product.image)}>Add to cart</button>
		</div>
	)


    return ( 
        <main className={styles.main}>
           	<SearchBar 
			   	searchProductName={searchProductName} 
				handleSearchProducts={handleSearchProducts}
			/>
			{showProducts}
			<CartIcon cartQuantity={cart.length} />
      </main>
     );
}
 
export default Main;


