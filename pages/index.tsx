import Head from "next/head";
import Main from "./Main";
import { gql } from "@apollo/client";
import client from "../src/apollo/apollo-client";


 const Home = ({products}) => {
    return (
		<div>
			<Head>
				<title>ReasonApps Shop</title>
				<meta name="ReasonApps Shop" content="Created by Piotr Ludew" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Main products={products}/>
		</div>
    );
}
export default Home;


export async function getServerSideProps() {
  	const { data } = await client.query({
		query: gql`
		query Products {
			products {
				id
				name
				price
				description
				image
				slug
			}
		}
		`,
  	});

  	return {
    	props: {
      		products: data.products || [],
    	},
  	};
};
