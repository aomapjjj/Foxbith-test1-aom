import TextField from "@mui/material/TextField"

type FormInputProps = {
  name: string
  label: string
}

const FormInput = (props: FormInputProps) => {
  const { name , label} = props
  return (
    <>
      <TextField
        name={name}
        id="outlined-basic"
        label={label}
        variant="outlined"
        sx={{ width: "100%" }}
      />
    </>
  )
}
export default FormInput
