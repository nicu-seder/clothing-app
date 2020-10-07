import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgray;
`;

export const CheckoutHeaderBlock = styled.div`
      text-transform: capitalize;
      width: 23%;
      margin-bottom: 15px;

      &:last-child{
        width: 8%;
      }
`;

export const CheckoutTotal = styled.div`
  margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;