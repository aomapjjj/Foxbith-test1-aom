import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import CheckboxBtn from "./CheckboxBtn"

const CheckBoxBtnGroup = () => {
  return (
    <div>
      <FormControl component="fieldset" >
      <FormLabel component="legend">Hobby</FormLabel>
        <FormGroup aria-label="Hobby"   row>
            <CheckboxBtn name="Game" label="Game"  />
            <CheckboxBtn name="Music" label="Music"/>
            <CheckboxBtn name="Craft" label="Craft"/>
            <CheckboxBtn name="Reading" label="Reading"/>
        </FormGroup>
      </FormControl>
    </div>
  )
}
export default CheckBoxBtnGroup
