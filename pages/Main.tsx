import * as React from 'react';
import { useState } from 'react';
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from 'next/link'
import SearchBar from '../src/components/atoms/SearchBar';
import { useStore } from '../src/store/store';
import image from 'next/image';

const Main = ({ products }) => {
	const { cart, addToCart, removeFromCart } = useStore();
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

	const handleRemoveFromCart = (id: string) => {
		removeFromCart(id)
	}


	const fiteredProducts = products.filter(product => product.name.toLowerCase().includes(searchProductName));

	const showProducts = fiteredProducts.map(product => 
		<div key={product.id}>
			<p>{product.name}</p>
			<Image src={product.image} alt={product.name} width={150} height={150} />
			<p>{product.description}</p>
			<p>{product.price}</p>
			<Link href={'/products/' + product.slug}>zobacz wieej</Link>
			<button onClick={() => handleAddToCart(product.id, product.name, product.price, product.image)}>Add to cart</button>
			<button onClick={() => handleRemoveFromCart(product.id)}>Delete from cart</button>
		</div>
	)

	
    return ( 
        <main className={styles.main}>
			
           	<SearchBar 
			   	searchProductName={searchProductName} 
				handleSearchProducts={handleSearchProducts}
			/>

			{showProducts}
        {/* <h1 className={styles.title}>
          <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>
     );
}
 
export default Main;


