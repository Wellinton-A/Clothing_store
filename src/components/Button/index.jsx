import { ButtonBase, GoogleButton, InvertedButton } from './button-style.js'

export const BUTTON_TYPE = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted'
}

const getButton = (buttonType = BUTTON_TYPE.base) =>
  ({
    [BUTTON_TYPE.base]: ButtonBase,
    [BUTTON_TYPE.google]: GoogleButton,
    [BUTTON_TYPE.inverted]: InvertedButton,
  }[buttonType])

const Button = ({children, buttonType, ...otherProps}) => {
  const CustomButton = getButton(buttonType)

  return (
    <CustomButton {...otherProps}>
      {children}
    </CustomButton>
  )
}

export default Button