import React from "react";
import {connect} from 'react-redux';

//Import styles
import './collection.styles.scss';

//Import components
import CollectionItem from "../../components/collection-item/collection-item.component";



//Import redux selectors
import {selectCollection} from "../../redux/shop/shop.selectors";

const CollectionPage = ({collection})=>{
    const {title, items} = collection;
    return (
        <div className={'collection-page'}>
            <h2 className={'title'}>{title}</h2>
            <div className={'items'}>
                {
                    items.map(item=>{
                        return <CollectionItem item={item}/>
                    })
                }
            </div>

        </div>
    )
};

const mapStateToProps = (state, ownProps)=>{
    return {
        collection:selectCollection(ownProps.match.params.categoryId)(state)
    }
};

export default connect(mapStateToProps, null)(CollectionPage);