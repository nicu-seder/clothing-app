import React from "react";

//Import styles
import {CartItemContainer, CartItemImage, CartItemDetails, CartItemInfo} from "./cart-item.styles";
import './cart-item.styles.scss';

const CartItem = ({item:{imageUrl, name, price, quantity}})=>{
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt={'item'}/>
            <CartItemDetails>
                <CartItemInfo>{name}</CartItemInfo>
                <CartItemInfo>{quantity} x ${price}</CartItemInfo>
            </CartItemDetails>
        </CartItemContainer>
    )
};
export default CartItem;