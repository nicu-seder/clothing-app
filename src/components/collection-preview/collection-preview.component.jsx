import React from "react";
import {withRouter} from 'react-router-dom';

//Import styles
import './collection-preview.styles.scss';

//Import components
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({title, items, history, match, routeName})=>{
    return (
        <div className={'collection-preview'}>
            <h1 onClick={()=>history.push(`${match.path}/${routeName}`)} className={'title'}>{title.toUpperCase()}</h1>
            <div className={'preview'}>
                {
                    items
                        .filter((item, index)=>{
                            return index < 4;
                        })
                        .map((item)=>{
                        return <CollectionItem key={item.id} item={item}/>
                    })
                }
            </div>
        </div>
    )
};

export default withRouter(CollectionPreview);