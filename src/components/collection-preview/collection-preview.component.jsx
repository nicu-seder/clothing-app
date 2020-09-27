import React from "react";

//Import styles
import './collection-preview.styles.scss';

//Import components
import CollectionItem from "../collection-item/collection-item.component";

export const CollectionPreview = ({title, items})=>{
    return (
        <div className={'collection-preview'}>
            <h1 className={'title'}>{title.toUpperCase()}</h1>
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