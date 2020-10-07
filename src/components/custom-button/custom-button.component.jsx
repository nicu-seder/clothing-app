import React from "react";

//Import styles
import {CustomButtonContainer} from "./custom-button.styles";

export const CustomButton = ({children,isGoogleSignIn,inverted, ...otherProps})=>{
    return (
        <CustomButtonContainer isGoogleSignIn iverted {...otherProps}>
            {children}
        </CustomButtonContainer>
    )
};