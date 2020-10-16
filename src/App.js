import React, {useEffect} from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';

//Import components
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import {SignInSignUpPage} from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

//Import firebase
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

//Import redux
import {connect} from 'react-redux';

//Import redux actions
import {checkUserSession} from "./redux/user/user.actions";

//Import reselect
import {createStructuredSelector} from "reselect";

//Import selectors
import {selectCurrentUser} from "./redux/user/user.selectors";
import {selectCollectionsForPreview} from "./redux/shop/shop.selectors";

const App = ({checkUserSession, currentUser})=> {
    useEffect(()=>{
        checkUserSession();
    },[checkUserSession]);




        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path={'/'} component={HomePage}/>
                    <Route path={'/shop'} component={ShopPage}/>
                    <Route exact path={'/signin'} render={()=>currentUser?<Redirect to={'/'}/>:<SignInSignUpPage/>}/>
                    <Route exact path={'/checkout'} component={CheckoutPage}/>
                </Switch>
            </div>
        );
}

const mapStateToProps = createStructuredSelector(
    {
        currentUser:selectCurrentUser,
        collectionsArray:selectCollectionsForPreview
    }
);

const mapDispatchToProps = dispatch=>{
    return {
        checkUserSession:()=>dispatch(checkUserSession())
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(App);
