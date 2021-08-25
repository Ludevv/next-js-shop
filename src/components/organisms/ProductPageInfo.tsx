import * as React from 'react';
import Image from "next/image";


type ProductPageInfoProps = {
    name: string;
    price: string;
    image: string;
    description: string;
}
 

const ProductPageInfo: React.FC<ProductPageInfoProps> = ({ name, price, image, description }) => {
    return ( 
        <>
            <h1 className="text-4xl mb-10 font-extrabold"> {name} </h1>
            <Image src={image} alt={name} width={400} height={200}/>
            <p className="text-center w-64 my-10 text-xl"> {description} </p>
            <p className="w-64 mb-10 text-center text-4xl font-extrabold"> {price}$</p>
        </>
     );
}
 
export default ProductPageInfo;