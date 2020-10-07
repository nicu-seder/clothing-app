import styled from 'styled-components';
import {CustomButton} from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 5;
  width: 240px;
  height: 340px;
  border: 1px solid black;
  background-color: white;
  padding: 20px;
  top: 80px;
  right: 70px;
`;

export const CartItems =  styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;

export const EmptyMessage = styled.span`
  width: 100%;
    font-size: 16px;
    margin:50px ;
`;

export const ToCheckoutButton = styled(CustomButton)`
  margin-top: auto;
`;