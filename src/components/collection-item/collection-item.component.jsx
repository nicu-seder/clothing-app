import React from "react";
import {connect} from 'react-redux';

//Import styles
import './collection-item.styles.scss';

//Import components
import {CustomButton} from "../custom-button/custom-button.component";

//Import redux actions
import {addItem} from "../../redux/cart/cart.actions";

const CollectionItem = ({item, addItem})=>{
    const {imageUrl, name, price} = item;
    return(
        <div className={'collection-item'}>
            <div className={'image'} style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className={'collection-footer'}>
                <span className={'name'}>
                    {name}
                </span>
                <span className={'price'}>
                    {`$${price}`}
                </span>
            </div>
            <CustomButton onClick={()=>addItem(item)} className={'custom-button'} inverted={true}>ADD TO CART</CustomButton>
        </div>
    )
};

const mapDispatchToProps = (dispatch)=>{
    return {
        addItem:(item)=>dispatch(addItem(item))
    }
};

export default connect(null,mapDispatchToProps)(CollectionItem);