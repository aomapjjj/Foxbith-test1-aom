import Checkbox from "@mui/material/Checkbox"

import FormControlLabel from "@mui/material/FormControlLabel"

type CheckboxBtnProps = {
  label: string
  name: string
}

const CheckboxBtn = (props: CheckboxBtnProps) => {
  const { label , name } = props
  return (
    <FormControlLabel
      value={label}
      control={<Checkbox value={name} />}
      label={label}
      name={name}
    />
  )
}
export default CheckboxBtn
