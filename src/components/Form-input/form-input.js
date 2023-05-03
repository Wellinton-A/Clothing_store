import styled, { css } from "styled-components";

const subcolor = 'grey';
const mainColor = 'black';

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`

export const FormImputLabel = styled.label`
  color: ${subcolor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({shrink}) => shrink && shrinkLabel}

`

export const Group = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`

export const FormImp = styled.input`
  background: none;
  background-color: white;
  color: ${subcolor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subcolor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormImputLabel} {
    ${shrinkLabel};
  }
`