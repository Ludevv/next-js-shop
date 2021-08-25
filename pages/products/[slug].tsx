import { gql } from "@apollo/client";
import client from "../../src/apollo/apollo-client";
import Button from '../../src/components/atoms/Button';
import CartIcon from '../../src/components/atoms/CartIcon';
import BackArrow from '../../src/components/molecues/BackArrow';
import ProductPageInfo from '../../src/components/organisms/ProductPageInfo';
import { useStore } from "../../src/store/store";
import ShowCategories from "../../src/components/molecues/ShowCategories";


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
    const { id, name, image, price, description, categories} = product.product.products[0];
    const { cart, addToCart } = useStore();

    const handleAddToCart = (id: string, name: string, price: string, image: string) => {
		const item = {
			id,
			name,
			price,
			image,
		}
		addToCart(item)
	}

    return ( 
        <div className="bg-gray-700 p-12 min-h-screen text-white">
            <BackArrow/>
            <div className="flex flex-col items-center">
                <ProductPageInfo 
                    name={name} 
                    price={price} 
                    description={description} 
                    image={image}
                />
                <ShowCategories categories={categories}/>
                <Button 
                    id={id} 
                    name={name} 
                    price={price} 
                    image={image} 
                    handleAddToCart={handleAddToCart}
                />
                <CartIcon cartQuantity={cart.length}/>
            </div>
        </div>
     );
}
 
export default Details;