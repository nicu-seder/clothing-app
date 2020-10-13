import {takeLatest, call, put, all} from 'redux-saga/effects';

//Import user action types
import UserActionTypes from "./user.types";

//Import firebase
import {googleProvider, auth, createUserProfileDocument, getCurrentUser} from "../../firebase/firebase.utils";

//Import redux actions
import {signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpSuccess, signUpFailure} from "./user.actions";

export function* getSnapshotFromUserAuth(userAuth, additionalData){
    try{
        const userRef =yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }))
    }catch (e) {
        yield put(signInFailure(e.message))
    }
}

export function* signInWithGoogle(){
    try{
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    }catch (e) {
        yield put(signInFailure(e.message))
    }
}

export function* signInWithEmail({payload:{email, password}}){
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    }catch (e) {
        yield put(signInFailure(e.message))
    }
}

export  function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth) return ;
        yield getSnapshotFromUserAuth(userAuth);
    }catch (e) {
        yield put(signInFailure(e.message))
    }
}

export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated )
}

export function* signOut(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess())
    }catch (e) {
        yield put(signOutFailure(e.message))
    }
}

export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* signUp({payload:{email, password, displayName}}){
    try{
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({user, additionalData:{displayName}}));
    }catch (e) {
        yield put(signUpFailure(e.message()))
    }

}

export function* signInAfterSignUp({payload:{user, additionaldata}}){
    yield getSnapshotFromUserAuth(user, additionaldata);
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
}