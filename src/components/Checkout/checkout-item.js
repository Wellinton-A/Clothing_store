import styled from "styled-components";


export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const CheckoutName = styled.span`
  width: 23%;
`

export const CheckoutQuantity = styled.span`
  width: 23%;
  display: flex;
`

export const CheckoutPrice = styled.span`
  width: 23%;
`

export const CheckoutArrow = styled.div`
  cursor: pointer;
`

export const CheckoutValue = styled.span`
  margin: 0 10px;
`

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`

export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`