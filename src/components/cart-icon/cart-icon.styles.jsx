import styled from 'styled-components';
import {ReactComponent as ShoppingIconImage} from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  position: relative;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconImage)`
    width: 24px;
    height: 24px;
`;

export const IconCountSpan = styled.span`
    position: absolute;
    font-size: 11px;
    font-weight: bold;
    bottom: 12px;
`;