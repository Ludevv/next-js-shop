import * as React from 'react';
import { useState } from 'react';
import SearchBar from '../src/components/atoms/SearchBar';
import { useStore } from '../src/store/store';
import CartIcon from '../src/components/atoms/CartIcon';
import Card from '../src/components/organisms/Card';

const Main = ({ products }) => {
	const { cart, addToCart } = useStore();
	const [searchProductName, setSearchProductName] = useState("");

	const handleSearchProducts = (productName: string) => {
		setSearchProductName(productName);
	}

	const handleAddToCart = (id: string, name: string, price: string, image: string) => {
		if(cart.find(item => item.id === id)) {
			return;
		} else {
		const item = {
			id,
			name,
			price,
			image,
		}
		addToCart(item)
		}
	}

	const showProducts = products.filter(product => product.name.toLowerCase().includes(searchProductName))
		.map((product, index) => <Card key={index} product={product} handleAddToCart={handleAddToCart}/>)


    return ( 
		<>
           	<SearchBar 
			   	searchProductName={searchProductName} 
				handleSearchProducts={handleSearchProducts}
			/>
        	<main className="bg-gray-700 p-12 flex flex-wrap justify-center text-gray-800 min-h-screen">
				{showProducts.length > 0 
				? 
				showProducts 
				:
				<p className="text-white font-semibold text-2xl">I can't find this phrase ...</p>}
				<CartIcon cartQuantity={cart.length}/>
      		</main>
		  </>
     );
}
 
export default Main;


