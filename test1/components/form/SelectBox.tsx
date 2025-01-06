import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"

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
  return (
    <div>
      <TextField id="outlined-select-currency" select label="Status"  sx={{ width: "100%" }}>
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
