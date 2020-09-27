import React from "react";

//Import styles
import './custom-button.styles.jsx.scss';

export const CustomButton = ({children,isGoogleSingIn,inverted, ...otherProps})=>{
    return (
        <button className={`${inverted ? 'inverted' : ''} custom-button\`}${isGoogleSingIn?'google-sign-in':''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
};