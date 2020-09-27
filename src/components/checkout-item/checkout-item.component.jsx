import React from "react";

//Import styles
import './checkout-item.styles.scss';

const CheckoutItem = ({item})=>{
    return(
        <div className={'checkout-item'}>
            <div className={'image-container'}>
                <img alt={'item'} src={item.imageUrl}/>
            </div>
            <span className={'name'}>{item.name}</span>
            <span className={'quantity'}>{item.quantity}</span>
            <span className={'price'}>{item.price}</span>
            <div className={'remove-button'}>&#10005;</div>
        </div>
    )
};

export default CheckoutItem;