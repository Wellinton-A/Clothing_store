import { FormImp, FormImputLabel, Group } from './form-input.js'

const FormImput = ({ label, ...otherProps }) => {

  return (
    <Group>
      <FormImp {...otherProps} />
      {label && (
      <FormImputLabel shrink={otherProps.value.length}>{ label }</FormImputLabel>
      )}
    </Group>
  )
}

export default FormImput