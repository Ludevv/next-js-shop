import * as React from 'react';
import Image from "next/image";
import Link from 'next/link'
import Button from '../atoms/Button';

type CardProps = {
    product: {
        id: string;
        name: string;
        price: string;
        description: string;
        image: string;
        slug: string;
    }
    handleAddToCart: ( id: string, name: string, price: string, image: string ) => void;
}
 
const Card: React.FC<CardProps> = ({ product, handleAddToCart }) => {
    return ( 
        <div className="rounded-xl shadow-xl w-60 m-10 bg-white ">
            <div className="flex flex-col">
                <Image 
                    src={product.image} 
                    alt={product.name} 
                    width={228} 
                    height={150} 
                    className="rounded-t-xl"
                />

                <div key={product.id} className="p-4">

                    <h3 className="font-semibold mb-6 text-center">{product.name}</h3>
                    <p className="mb-2 text-sm text-justify h-24">{product.description}</p>

                    <div className="w-full text-right mb-6 text-sm underline">
                        <Link href={'/products/' + product.slug}>Check more details</Link>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="font-bold">{product.price}$</p>
                        <Button 
                            id={product.id} 
                            name={product.name} 
                            price={product.price} 
                            image={product.image} 
                            handleAddToCart={handleAddToCart}
                        />
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Card;