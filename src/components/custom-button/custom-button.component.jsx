import React from "react";

//Import styles
import './custom-button.styles.jsx.scss';

export const CustomButton = ({children, ...otherProps})=>{
    return (
        <button className={'custom-button'} {...otherProps}>
            {children}
        </button>
    )
};