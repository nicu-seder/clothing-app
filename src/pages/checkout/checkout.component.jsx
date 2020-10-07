import React from "react";
import {connect} from 'react-redux'

//Import styles
import {CheckoutPageContainer, CheckoutHeader, CheckoutHeaderBlock, CheckoutTotal} from "./checkout.styles";

//Import reselect
import {createStructuredSelector} from "reselect";

//Import selectors
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";

//Import components
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({cartItems, total})=>{
    return(
        <CheckoutPageContainer>
            <CheckoutHeader>
                <CheckoutHeaderBlock>
                    <span>Product</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Description</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>
                        Quantity
                    </span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Price</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Remove</span>
                </CheckoutHeaderBlock>
            </CheckoutHeader>
            {
                cartItems.map(cartItem=>{
                    return <CheckoutItem key={cartItem.id} item={cartItem}/>
                })
            }
            <CheckoutTotal className={'total'}>
                <span>TOTAL: ${total}</span>
            </CheckoutTotal>
            <StripeCheckoutButton price={total}/>
        </CheckoutPageContainer>
    )
};

const mapStateToProps = createStructuredSelector(
    {
        cartItems:selectCartItems,
        total:selectCartTotal
    }
);

export default connect(mapStateToProps, null)(CheckoutPage);