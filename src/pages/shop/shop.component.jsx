import React from "react";

//Import styles
import './shop.styles.scss';

//Import data
import SHOP_DATA from "./shop.data";

//Import components
import {CollectionPreview} from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className={'shop-page'}>
                {
                    collections.map(({id, ...otherCollectionProps}) => {
                        return <CollectionPreview key={id} {...otherCollectionProps}/>
                    })
                }
            </div>
        )
    }
}

export default ShopPage;