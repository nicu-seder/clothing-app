import React from "react";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
//Import styles
import './cart-dropdown.styles.scss';

//Import components
import {CustomButton} from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

//Import reselect
import {createStructuredSelector} from "reselect";

//Import selectors
import {selectCartItems} from "../../redux/cart/cart.selectors";

//Import redux actions
import {toggleCartHidden} from "../../redux/cart/cart.actions";



const CartDropdown = ({cartItems, history, toggleCartHidden}) => {
    return (
        <div className={'cart-dropdown'}>
            <div className={'cart-items'}>
                {cartItems.length?
                    cartItems.map(cartItem => {
                        return <CartItem key={cartItem.id} item={cartItem}/>
                    }):
                    <span className={'empty-message'}>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={()=>{history.push('/checkout');
            toggleCartHidden()}}>GO TO CHECKOUT</CustomButton>
        </div>
    )
};

const mapStateToProps = createStructuredSelector(
    {
        cartItems:selectCartItems
    }
);

const mapDispatchToProps = dispatch=>{
    return {
        toggleCartHidden:()=>dispatch(toggleCartHidden())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));