import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const CheckoutItemImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
`;

export const CheckoutItemImage = styled.img`
  width: 100%;
      height: 100%;
`;

export const RemoveItem = styled.div`
  padding-left: 12px;
    cursor: pointer;
`;

export const IncreaseQuantity = styled.div`
  cursor: pointer;
`;

export const DecreaseQuantity = styled.div`
  cursor: pointer;
`;

export const CheckoutItemInfo = styled.span`
  width: 23%;
`;

export const CheckoutItemQuantity = styled.span`
  width: 23%;
  display: flex;
    padding-left: 20px;
`;

export const CheckoutItemQuantityValue = styled.span`
  margin: 0 10px;
`;