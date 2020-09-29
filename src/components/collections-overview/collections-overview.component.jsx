import React from "react";
import {connect} from 'react-redux';

//Import reselect
import {createStructuredSelector} from "reselect";

//Import redux selectors
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";

//Import styles
import './collections-overview.styles.scss';

//Import components
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const CollectionsOverview = ({collections})=>{
    return (
        <div className={'collections-overview'}>
            {
                collections.map(({id, ...otherCollectionProps}) => {
                    return <CollectionPreview key={id} {...otherCollectionProps}/>
                })
            }
        </div>
    )
};

const mapStateToProps = createStructuredSelector(
    {
        collections:selectCollectionsForPreview
    }
);

export default connect(mapStateToProps, null)(CollectionsOverview);