import Box from "@mui/material/Box"
import { Stringifier } from "styled-components/dist/types"
import Grid from "@mui/material/Grid"
import { Trash } from "lucide-react"
import FormControlLabel from "@mui/material/FormControlLabel"
import { Button , Checkbox } from "@mui/material"

type FormOutput = {
  // no?: String
  // name?: String
  // lastname?: string
  // email?: String
  // gender?: String
  // hobby?: string
  // status?: string
  // note?: string
  users: userProps[]
}

type userProps = {
  no?: String
  name?: String
  lastname?: string
  email?: String
  gender?: String
  hobby?: string
  status?: string
  note?: string
}

const FormOutput = (props: FormOutput) => {
  const { users } = props

  return (
    <div>
      {users.map((user: any, index: any) => (
        <Box
          key={index}
          sx={{
            mt: 3,
            width: "700px",
            gap: 6,
            p: 2,
            boxShadow: 2,
            backgroundColor: "white",
          }}
        >
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          >
            <Grid item xs={6}>
              <h2>USER {index + 1} </h2>
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
              <Button
  onClick={() => {
    alert('clicked');
  }}
>
              <Trash />
              </Button>
            </Grid>
            <Grid item xs={6}>
              <p>Name : {user.name ? `${user.name} ${user.lastname}` : "-"} </p>
            </Grid>
            <Grid item xs={6}>
              <p>Email : {user.email ? user.email : "-"} </p>
            </Grid>
            <Grid item xs={6}>
              <p>Gender : {user.gender ? user.gender : "-"}</p>
            </Grid>
            <Grid item xs={6}>
              <p>Hobby : {user.hobby ? user.hobby : "-"} </p>
            </Grid>
            <Grid item xs={6}>
              <p>Status : {user.status ? user.status : "-"} </p>
            </Grid>
            <Grid item xs={6}>
              <p>Note : {user.note ? user.note : "-"} </p>
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                disabled
                control={<Checkbox />}
                label="Confirm PDPA"
              />
            </Grid>
          </Grid>
        </Box>
      ))}
    </div>
  )
}
export default FormOutput
