import React from "react";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
//Import styles
import {CartDropdownContainer, CartItems, EmptyMessage, ToCheckoutButton} from "./cart-dropdown.styles";

//Import components
import CartItem from "../cart-item/cart-item.component";

//Import reselect
import {createStructuredSelector} from "reselect";

//Import selectors
import {selectCartItems} from "../../redux/cart/cart.selectors";

//Import redux actions
import {toggleCartHidden} from "../../redux/cart/cart.actions";



const CartDropdown = ({cartItems, history, toggleCartHidden}) => {
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length?
                    cartItems.map(cartItem => {
                        return <CartItem key={cartItem.id} item={cartItem}/>
                    }):
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                }
            </CartItems>
            <ToCheckoutButton onClick={()=>{history.push('/checkout');
            toggleCartHidden()}}>GO TO CHECKOUT</ToCheckoutButton>
        </CartDropdownContainer>
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