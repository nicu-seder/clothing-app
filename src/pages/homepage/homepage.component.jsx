import React from "react";

//Import styles
import {HomePageContainer} from "./homepage.styles";

//Import components
import Directory from "../../components/directory/directory.component";

const HomePage = (props)=>{
    return(
    <HomePageContainer>
        <Directory/>
    </HomePageContainer>
    )
};

export default HomePage;