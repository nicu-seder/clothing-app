import React from "react";
import {connect} from 'react-redux';

//Import styles
import {ShopPageContainer} from "./shop.styles";


//Import components
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

//Import routing
import {Route} from 'react-router-dom';

//Import redux actions
import {fetchCollectionsStart} from "../../redux/shop/shop.actions";

//Import selectors
import {createStructuredSelector} from "reselect";
import { selectIsCollectionLoaded} from "../../redux/shop/shop.selectors";

import CollectionOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";


class ShopPage extends React.Component {

    componentDidMount() {
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart();
        // const {updateCollections} = this.props;
        // const collectionRef = firestore.collection('collections');
        //
        //
        // collectionRef.get().then(snapshot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     this.setState({loading: false})
        //     // console.log(collectionsMap);
        // });
        console.log('Component did mount')
        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot=>{
        //     const collectionsMap =  convertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     this.setState({loading:false})
        //     // console.log(collectionsMap);
        // })
    }

    componentWillUnmount() {
        console.log('Component will unmount')
    }

    render() {
        const {match, isCollectionLoaded} = this.props;
        console.log('Component render');
        return (
            <ShopPageContainer>
                <Route exact path={`${this.props.match.path}`}
                      component={CollectionOverviewContainer}/>
                <Route path={`${match.path}/:categoryId`}
                       component={CollectionPageContainer}/>
            </ShopPageContainer>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
    }
};

export default connect(null, mapDispatchToProps)(ShopPage);