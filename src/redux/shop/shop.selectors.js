import {createSelector} from "reselect";


const selectShop = state => state.shop;

export const selectCollections = createSelector(
    selectShop,
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    selectCollections,
    collections=> collections? Object.keys(collections).map(key=>{
        return collections[key]
    }):[]
);

export const selectCollection = (collectionId) => createSelector(
    [selectCollections],
    collections => collections? collections[collectionId] : null
);

export const selectIsCollectionFetching = createSelector(
    selectShop,
    shop=>shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
    selectCollections,
    collections=>!!collections
);