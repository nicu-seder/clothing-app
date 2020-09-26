import React from "react";

//Import styles
import './sign-in-and-sign-up.styles.scss';

//Import components
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

export const SignInSignUpPage = ()=>{
    return(
        <div className={'sign-in-and-sign-up'}>
            <SignIn/>
            <SignUp/>
        </div>
    )
};