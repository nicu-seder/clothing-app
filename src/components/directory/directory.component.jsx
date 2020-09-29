import React from "react";
import {connect} from 'react-redux';

//Import styles
import './directory.styles.scss';

//Import components
import MenuItem from "../menu-item/menu-item.component";

//Import reselect
import {createStructuredSelector} from "reselect";

//Import selectors
import {selectSections} from "../../redux/directory/directory.selectors";

const Directory = ({sections})=> {
        return(
        <div className={'directory-menu'}>
            {
                sections.map(({id, ...otherSectionProps})=>{
                    return <MenuItem key={id} {...otherSectionProps}/>
                })
            }
        </div>
        )
};

const mapStateToProps = createStructuredSelector(
    {
        sections:selectSections
    }
);

export default connect(mapStateToProps, null)(Directory);

