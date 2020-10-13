import React from "react";
import {connect} from 'react-redux';

//Import styles
import {CollectionPageContainer, Items, Title} from "./collection.styles";

//Import components
import CollectionItem from "../../components/collection-item/collection-item.component";



//Import redux selectors
import {selectCollection} from "../../redux/shop/shop.selectors";

const CollectionPage = ({collection})=>{
    const {title, items} = collection;
    return (
        <CollectionPageContainer>
            <Title>
                {title}
            </Title>
            <Items>
                {
                    items.map(item=>{
                        return <CollectionItem key={item.id} item={item}/>
                    })
                }
            </Items>

        </CollectionPageContainer>
    )
};

const mapStateToProps = (state, ownProps)=>{
    return {
        collection:selectCollection(ownProps.match.params.categoryId)(state)
    }
};

export default connect(mapStateToProps, null)(CollectionPage);