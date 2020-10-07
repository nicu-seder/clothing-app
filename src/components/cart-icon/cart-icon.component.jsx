import React from "react";
//Import styles
import {CartIconContainer, ShoppingIcon, IconCountSpan} from "./cart-icon.styles";

//Import redux
import {connect} from 'react-redux';

//Import redux actions
import {toggleCartHidden} from "../../redux/cart/cart.actions";

//Import selectors
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";

//Import reselect
import {createStructuredSelector} from "reselect";

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return (
        <CartIconContainer onClick={toggleCartHidden}>
            <ShoppingIcon className={'shopping-icon'}/>
            <IconCountSpan>{itemCount}</IconCountSpan>
        </CartIconContainer>
    )
};

const mapStateToProps = createStructuredSelector(
    {
        itemCount: selectCartItemsCount
    }
);

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);