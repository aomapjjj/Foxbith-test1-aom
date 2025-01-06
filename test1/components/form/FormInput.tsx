import TextField from "@mui/material/TextField"

type FormInputProps = {
  name: string
  select?: string
}

const FormInput = (props: FormInputProps) => {
  const { name } = props
  return (
    <>
      <TextField
        name={name}
        id="outlined-basic"
        label={name}
        variant="outlined"
        sx={{ width: "100%" }}
      />
    </>
  )
}
export default FormInput
