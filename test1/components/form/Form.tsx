import FormInput from "@/components/form/FormInput"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import CheckboxBtn from "./CheckboxBtn"
import RadioBtnGroup from "./RadioBtnGroup"
import CheckBoxBtnGroup from "./CheckBoxBtnGroup"
import SelectBox from "./SelectBox"
import Btn from "./Btn"
import { useActionState } from "react"
import { createUser } from "@/utils/actions"
import FormOutput from "../formOutput/FormOutput"
import { useState } from "react"

const Form = () => {
  const [message, formActions] = useActionState(createUser, null)
  const users = useState([])

  
  

  return (
    <div>
      <Box
        sx={{
          margin: "20px",
          "@media screen and (min-width:600px)": {
            width: "700px",
          },
        }}
      >
        <Typography
          variant="h4"
          display="flex"
          component="div"
          sx={{ flexGrow: 1, justifyContent: "center", marginTop: "50px" }}
        >
          <p>Profile management</p>
        </Typography>
        <Box
          sx={{
            m: 0.5,
            my: 4,
            display: "flex",
            alignItems: "center",
            gap: 6,
            p: 2,
            boxShadow: 2,
            backgroundColor: "white",
          }}
        >
          <form action={formActions}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <FormInput name="Name" />
              </Grid>
              <Grid item xs={6}>
                <FormInput name="Lastname" />
              </Grid>
              <Grid item xs={12}>
                <FormInput name="Email" />
              </Grid>
              <Grid item xs={12}>
                <CheckboxBtn label="Confirm PDPA" />
              </Grid>
              <Grid item xs={6}>
                <RadioBtnGroup />
              </Grid>
              <Grid item xs={6}>
                <CheckBoxBtnGroup />
              </Grid>
              <Grid item xs={12}>
                <SelectBox />
              </Grid>
              <Grid item xs={12}>
                <FormInput name="Note" />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  m: 0.5,
                  my: 2,
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 2,
                }}
              >
                <Btn msg="Reset" />
                <Btn msg="Submit" />
              </Grid>
            </Grid>
          </form>
        </Box>
        <FormOutput name={message?.Name } email={message?.Email} lastname note={message?.Note}/>
      </Box>
    </div>
  )
}
export default Form
