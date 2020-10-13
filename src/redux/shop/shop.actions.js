import ShopActionTypes from "./shop.types";

//Import firestore
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_START
    }
};

export const fetchCollectionsSuccess = (collectionsMap)=>{
    return {
        type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload:collectionsMap
    }
};

export const fetchCollectionsFailure = (errorMessage)=>{
    return {
        type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
        payload:errorMessage
    }
};

export const fetchCollectionsStartAsync = ()=>{
    return dispatch=>{
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef
            .get()
            .then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
        }).catch(error=>dispatch(fetchCollectionsFailure(error.message)));
    }
};

