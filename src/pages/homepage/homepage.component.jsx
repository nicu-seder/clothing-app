import React from "react";

//Import styles
import './homepage.styles.scss';

//Import components
import Directory from "../../components/directory/directory.component";

const HomePage = (props)=>{
    return(
    <div className={'homepage'}>
        <Directory/>
    </div>
    )
};

export default HomePage;