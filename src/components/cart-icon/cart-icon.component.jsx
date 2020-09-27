import React from "react";
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

//Import styles
import './cart-icon.styles.scss';

//Import redux
import {connect} from 'react-redux';

//Import redux actions
import {toggleCartHidden} from "../../redux/cart/cart.actions";

const CartIcon = ({toggleCartHidden})=>{
    return (
        <div className={'cart-icon'} onClick={toggleCartHidden}>
            <ShoppingIcon className={'shopping-icon'}/>
            <span className={'item-count'}>0</span>
        </div>
    )
};

const mapDispatchToProps = (dispatch)=>{
    return {
        toggleCartHidden:()=>dispatch(toggleCartHidden())
    }
};

export default connect(null, mapDispatchToProps)(CartIcon);