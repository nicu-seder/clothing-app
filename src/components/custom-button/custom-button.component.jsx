import React from "react";

//Import styles
import './custom-button.styles.jsx.scss';

export const CustomButton = ({children,isGoogleSingIn, ...otherProps})=>{
    return (
        <button className={`${isGoogleSingIn?'google-sign-in':''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
};