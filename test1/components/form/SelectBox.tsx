import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import { useState } from "react"

const statuses = [
  {
    value: "Single",
    label: "Single",
  },
  {
    value: "Married",
    label: "Married",
  },
  {
    value: "Divorce",
    label: "Divorce",
  },
]

const SelectBox = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: any) => {
    setValue(event.target.value as string);
  };

  return (
    <div>
      <TextField id="status" name="status" select label="Status" value={value}  sx={{ width: "100%" }} onChange={handleChange}>
        {statuses.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  )
}
export default SelectBox
