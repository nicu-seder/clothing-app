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

//Import firebase
import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";

//Import redux actions
import {updateCollections} from "../../redux/shop/shop.actions";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');


        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading: false})
            // console.log(collectionsMap);
        });
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
        const {match} = this.props;
        const {loading} = this.state;
        console.log('Component render');
        return (
            <ShopPageContainer>
                <Route exact path={`${this.props.match.path}`}
                       render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}/>
                <Route path={`${match.path}/:categoryId`}
                       render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
            </ShopPageContainer>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
    }
};

export default connect(null, mapDispatchToProps)(ShopPage);