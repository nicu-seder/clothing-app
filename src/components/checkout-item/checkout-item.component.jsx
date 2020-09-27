import React from "react";
import {connect} from 'react-redux';

//Import styles
import './checkout-item.styles.scss';

//Import redux actions
import {clearItemFromCart, removeItem, addItem} from "../../redux/cart/cart.actions";

const CheckoutItem = ({item, clearItemFromCart, removeItem, addItem})=>{
    return(
        <div className={'checkout-item'}>
            <div className={'image-container'}>
                <img alt={'item'} src={item.imageUrl}/>
            </div>
            <span className={'name'}>{item.name}</span>
            <span className={'quantity'}>
                <div onClick={()=>removeItem(item)} className={'arrow'}>&#10094;</div>
                <span className={'value'}>{item.quantity}</span>
                <div onClick={()=>addItem(item)} className={'arrow'}>&#10095;</div>
            </span>
            <span className={'price'}>{item.price}</span>
            <div onClick={()=>clearItemFromCart(item)} className={'remove-button'}>&#10005;</div>
        </div>
    )
};

const mapDispatchToProps = dispatch=>{
    return{
        clearItemFromCart:(item)=>dispatch(clearItemFromCart(item)),
        removeItem:(item)=>dispatch(removeItem(item)),
        addItem:(item)=>dispatch(addItem(item))
    }
};

export default connect(null, mapDispatchToProps)(CheckoutItem);