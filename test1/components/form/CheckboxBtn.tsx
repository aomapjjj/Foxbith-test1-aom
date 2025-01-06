import Checkbox from "@mui/material/Checkbox"

import FormControlLabel from "@mui/material/FormControlLabel"

type CheckboxBtnProps = {
  label: string
}

const CheckboxBtn = (props: CheckboxBtnProps) => {
  const { label } = props
  return (
    <FormControlLabel
      value="end"
      control={<Checkbox />}
      label={label}
      labelPlacement="end"
    />
  )
}
export default CheckboxBtn
