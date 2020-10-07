import React from "react";
import {connect} from 'react-redux';

//Import styles
import {
    CheckoutItemContainer,
    CheckoutItemImage,
    CheckoutItemImageContainer,
    RemoveItem,
    DecreaseQuantity,
    IncreaseQuantity,
    CheckoutItemInfo,
    CheckoutItemQuantity, CheckoutItemQuantityValue
} from "./checkout-item.styles";
import './checkout-item.styles.scss';

//Import redux actions
import {clearItemFromCart, removeItem, addItem} from "../../redux/cart/cart.actions";

const CheckoutItem = ({item, clearItemFromCart, removeItem, addItem}) => {
    return (
        <CheckoutItemContainer>
            <CheckoutItemImageContainer>
                <CheckoutItemImage alt={'item'} src={item.imageUrl}/>
            </CheckoutItemImageContainer>
            <CheckoutItemInfo>{item.name}</CheckoutItemInfo>
            <CheckoutItemQuantity>
                <DecreaseQuantity onClick={() => removeItem(item)}>&#10094;</DecreaseQuantity>
                <CheckoutItemQuantityValue>{item.quantity}</CheckoutItemQuantityValue>
                <IncreaseQuantity onClick={() => addItem(item)}>&#10095;</IncreaseQuantity>
            </CheckoutItemQuantity>
            <CheckoutItemInfo>{item.price}</CheckoutItemInfo>
            <RemoveItem onClick={() => clearItemFromCart(item)}>&#10005;</RemoveItem>
        </CheckoutItemContainer>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
        removeItem: (item) => dispatch(removeItem(item)),
        addItem: (item) => dispatch(addItem(item))
    }
};

export default connect(null, mapDispatchToProps)(CheckoutItem);