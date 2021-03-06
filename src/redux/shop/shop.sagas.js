import {takeLatest, call, put, all} from 'redux-saga/effects';

import ShopActionTypes from "./shop.types";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";
import {fetchCollectionsFailure, fetchCollectionsSuccess} from "./shop.actions";


export function* fetchCollectionsAsync(){
    yield console.log('I am fired');
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    }catch (e) {
        yield put(fetchCollectionsFailure(e.message))
    }


    // collectionRef
    //     .get()
    //     .then(snapshot => {
    //         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //         dispatch(fetchCollectionsSuccess(collectionsMap));
    //     }).catch(error=>dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionsStart(){
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
        )
}

export function* shopSagas(){
    yield all([
        call(fetchCollectionsStart)
    ])
}