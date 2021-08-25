import * as React from 'react';


type ButtonProps = {
    id: string, 
    name: string, 
    price: string, 
    image: string
    handleAddToCart: ( id: string, name: string, price: string, image: string ) => void;
}

 
const Button: React.FC<ButtonProps> = ({id, name, price, image, handleAddToCart}) => {

    return ( 
        <button 
            onClick={() => handleAddToCart(id, name, price, image)} 
            className="py-1.5 px-3 bg-green-300 rounded-lg font-medium shadow-md hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        >
            Add to cart
        </button>
     );
}
 
export default Button;