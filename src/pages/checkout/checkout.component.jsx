import React from "react";
import {connect} from 'react-redux'

//Import styles
import './checkout.styles.scss';

//Import reselect
import {createStructuredSelector} from "reselect";

//Import selectors
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";

//Import components
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = ({cartItems, total})=>{
    return(
        <div className={'checkout-page'}>
            <div className={'checkout-header'}>
                <div className={'header-block'}>
                    <span>Product</span>
                </div>
                <div className={'header-block'}>
                    <span>Description</span>
                </div>
                <div className={'header-block'}>
                    <span>
                        Quantity
                    </span>
                </div>
                <div className={'header-block'}>
                    <span>Price</span>
                </div>
                <div className={'header-block'}>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem=>{
                    return <CheckoutItem key={cartItem.id} item={cartItem}/>
                })
            }
            <div className={'total'}>
                <span>TOTAL: ${total}</span>
            </div>
        </div>
    )
};

const mapStateToProps = createStructuredSelector(
    {
        cartItems:selectCartItems,
        total:selectCartTotal
    }
);

export default connect(mapStateToProps, null)(CheckoutPage);