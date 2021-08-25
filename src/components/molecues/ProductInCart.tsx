import * as React from 'react';
import Image from "next/image";
import { HiOutlinePlus } from 'react-icons/hi';
import styled from 'styled-components';
import { useStore } from '../../store/store';

type ProductInCartProps = {
    item: {
        id: string;
        name: string;
        image: string;
        price: string;
    }
}

const StyledHiOutlinePlus = styled(HiOutlinePlus)`
    width: 30px;
    height: 30px;
    margin: 0 10px;
    transform: rotate(45deg);
    cursor: pointer;
`;
 
const ProductInCart: React.FC<ProductInCartProps> = ({ item }) => {
    const { removeFromCart } = useStore();

	const handleRemoveFromCart = (id: string) => {
		removeFromCart(id)
	}

    return ( 
        <ul key={item.id}>
            <li className="flex my-8 mx-auto items-center w-1/2	text-black justify-between bg-white rounded-2xl">

                <div className="flex">
                    <Image className="rounded-l-2xl	" src={item.image} alt={item.name} width={100} height={100}/>
                    <p className="flex items-center ml-6 text-xl font-semibold">{item.name}</p>
                </div>

                <div className="flex">
                    <p className="font-semibold	text-xl">{item.price}$</p>
                    <StyledHiOutlinePlus onClick={() => handleRemoveFromCart(item.id)}/>
                </div>

            </li>
        </ul>
     );
}
 
export default ProductInCart;