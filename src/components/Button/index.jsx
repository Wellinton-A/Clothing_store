import './button.scss'

const BUTTON_STYLE_TYPE = {
  google: 'google-sign-in',
  inverted: 'inverted'
}

const Button = ({children, buttonType, ...otherProps}) => {

  return (
    <button {...otherProps} className={`button-container ${BUTTON_STYLE_TYPE[buttonType]}`}>
      {children}
    </button>
  )
}

export default Button