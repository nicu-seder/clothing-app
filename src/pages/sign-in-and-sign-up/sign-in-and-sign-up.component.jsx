import React from "react";

//Import styles
import {SignInSignUpContainer} from "./sign-in-and-sign-up.styles";

//Import components
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

export const SignInSignUpPage = ()=>{
    return(
        <SignInSignUpContainer>
            <SignIn/>
            <SignUp/>
        </SignInSignUpContainer>
    )
};