import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import CheckboxBtn from "./CheckboxBtn"
const CheckBoxBtnGroup = () => {
  return (
    <div>
      <FormControl component="fieldset">
      <FormLabel component="legend">Hobby</FormLabel>
        <FormGroup aria-label="position" row>
            <CheckboxBtn label="Game"/>
            <CheckboxBtn label="Music"/>
            <CheckboxBtn label="Craft"/>
            <CheckboxBtn label="Reading"/>
        </FormGroup>
      </FormControl>
    </div>
  )
}
export default CheckBoxBtnGroup
