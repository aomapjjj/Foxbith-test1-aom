import Box from "@mui/material/Box"
import { Stringifier } from "styled-components/dist/types"
import Grid from "@mui/material/Grid"
import { Trash } from "lucide-react"
import FormControlLabel from "@mui/material/FormControlLabel"
import { Checkbox } from "@mui/material"

type FormOutput = {
  no?: String
  name?: String
 lastname? :string
  email?: String
  gender?: String
  hobby?: string
  status?: string
  note?: string
}

const FormOutput = (props: FormOutput) => {
  const { no, name,lastname,  email, gender, hobby, status, note  } = props
  
  return (
    <div>
      <Box
        sx={{
          width: "700px",
          gap: 6,
          p: 2,
          boxShadow: 2,
          backgroundColor: "white",
        }}
      >
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          <Grid item xs={6}>
            <h2>USER {no} </h2>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            <Trash />
          </Grid>
          <Grid item xs={6}>
            <p>Name : {name ? lastname : "-"} </p>
          </Grid>
          <Grid item xs={6}>
            <p>Email : {email ? email : "-"} </p>
          </Grid>
          <Grid item xs={6}>
            <p>Gender : {gender ? gender : "-"}</p>
          </Grid>
          <Grid item xs={6}>
            <p>Hobby : {hobby ? hobby : "-"} </p>
          </Grid>
          <Grid item xs={6}>
            <p>Status : {status ? status : "-"} </p>
          </Grid>
          <Grid item xs={6}>
            <p>Note : {note ? note : "-"} </p>
          </Grid>
          <Grid item xs={6}>
          <FormControlLabel disabled control={<Checkbox />} label="Confirm PDPA" />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
export default FormOutput
