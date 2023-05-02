import { FormImputLab, Group } from './form-input.js'

const FormImput = ({ label, ...otherProps }) => {

  return (
    <Group>
      <FormImputLab {...otherProps} />
      {label && (
      <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{ label }</label>
      )}
    </Group>
  )
}

export default FormImput