import { gql } from "@apollo/client";
import client from "../../src/apollo/apollo-client";
import Image from "next/image";
import Link from 'next/link';

export const getStaticPaths = async () => {
    const { data } = await client.query(
        { query:  gql`
            query Products {
                products {
                    slug
                }
            }`, 
        }
    );

    const peths = data.products.map((product) => ({
        params: { slug: product.slug },
    }));
    
   return {
      paths: peths || [],
      fallback: false,
   };
}


export const getStaticProps = async (context) => {
    const slug = context.params.slug;
    const { data } = await client.query({
        query: gql`
            query Products($slug: String) {
                products(slug: $slug) {
                    name
                    image
                    price
                    description
                    categories {
                        name
                    }
                }
            }
        `, 
        variables: { slug: slug },
   });

   return {
      props: {
         product: data,
      },
   };

}


const Details = ( product ) => {
    const { name, image, price, description, categories} = product.product.products[0];

    return ( 
        <div>
            <Link href="/">Go back</Link>
            <h1> {name} </h1>
            <Image src={image} alt={name} width={200} height={200}/>
            <p> {description} </p>
            <p> {price} </p>
            {categories.map((category, index) => <p key={index}>{category.name}</p>)}
        </div>
     );
}
 
export default Details;