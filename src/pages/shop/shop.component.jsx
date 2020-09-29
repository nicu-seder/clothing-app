import React from "react";

//Import styles
import './shop.styles.scss';

//Import components
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

//Import routing
import {Route} from 'react-router-dom';

const ShopPage = ({match}) => {
    console.log(match.path);
    return (
        <div className={'shop-page'}>
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            <Route path={`${match.path}/:categoryId`} component={CollectionPage}/>
        </div>
    )
};

export default ShopPage;