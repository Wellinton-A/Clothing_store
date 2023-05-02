import styled from "styled-components";
import { ButtonBase } from "../Button/button-style";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 70px;
  right: 0px;
  z-index: 5;
`

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`

export const ButtonBaseCart = styled(ButtonBase)`
  margin-top: auto;
  font-size: 12px;
`