import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { RiShoppingCartLine } from 'react-icons/ri';


type CartIconProps = {
    cartQuantity: number;
};


const CartBadge = styled.div`
    position: fixed;
    right: 50px;
    bottom: 50px;
    width: 50px;
    height: 50px;
    background-color: #6ee7b7;
    border-radius: 50%;
    cursor: pointer;
`;

const WrapIcon = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const StyledRiShoppingCartLine = styled(RiShoppingCartLine)`
    height: 30px;
    width: 30px;
    color: #fff;
`;

const Quantity = styled.div`
    position: absolute;
    bottom: -5px;
    right: -5px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 20px;
    height: 20px;
    color: #fff;
    background-color: #f51e1e;
    border-radius: 50%;
`;
 

const CartIcon: React.FC<CartIconProps> = ({cartQuantity}) => {
    return ( 
        <CartBadge>      
            <WrapIcon>
                <Link href="/cart">
                    <a>
                    <StyledRiShoppingCartLine/>
                    </a>
                </Link>
            </WrapIcon>       
            <Quantity>
                {cartQuantity}
            </Quantity>
        </CartBadge> 
    );
}
 
export default CartIcon;