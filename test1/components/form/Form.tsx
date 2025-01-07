import FormInput from "@/components/form/FormInput"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import CheckboxBtn from "./CheckboxBtn"
import RadioBtnGroup from "./RadioBtnGroup"
import CheckBoxBtnGroup from "./CheckBoxBtnGroup"
import SelectBox from "./SelectBox"
import Btn from "./Btn"
import { use, useActionState } from "react"

import FormOutput from "../formOutput/FormOutput"
import { useState } from "react"

const HOBBIES_INIT:any = {
  game: false,
  music: false,
  craft: false,
  reading: false,
}

const Form = () => {
  const [users, setUsers] = useState<any>([])
  const [hobbies, setHobbies] = useState({ ...HOBBIES_INIT })
  const [confirmCheckBox, setConfirmCheckBox] = useState(false)

const hobbiesBuilder = (hobbiesValue:any) => {
  const result = Object.keys(hobbiesValue).filter((key:string) => hobbiesValue[key]);
  return result;
}

  const createUser = (prevState: any, formData: FormData) => {
    const rawData = Object.fromEntries(formData)
    const fomattedData = {
      ...rawData,
      confirmPDPA: confirmCheckBox,
      hobbies: hobbiesBuilder(hobbies)
    }
    const data = [...users, fomattedData]
    setHobbies({...HOBBIES_INIT})
    setConfirmCheckBox(false)
    setUsers(data)
  }

  const handleCheck = (field: any) => {
    setHobbies((prev:any) => {
      prev[field] = !prev[field];
      return {...prev};
    })
  }

  const handleCheckPDPA = () => {
    setConfirmCheckBox(prev => !prev)
  }

  const [message, formActions] = useActionState(createUser, null)

  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={{ xs: 1, sm: 2, md: 2 }}
      sx={{
        m: 1,
        p: 4,
      }}
    >
      <Grid xs={12} md={6}>
        <Typography
          variant="h4"
          display="flex"
          component="div"
          sx={{ flexGrow: 1, justifyContent: "center", marginTop: "50px" }}
        >
          <p>Profile management </p>
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
              columnSpacing={{ xs: 1, sm: 2, md: 2 }}
            >
              <Grid item xs={6}>
                <FormInput label="Name" name="name" />
              </Grid>
              <Grid item xs={6}>
                <FormInput label="Lastname" name="lastname" />
              </Grid>
              <Grid item xs={12}>
                <FormInput label="Email" name="email" />
              </Grid>
              <Grid item xs={12}>
                <CheckboxBtn
                  checked={confirmCheckBox}
                  onChange={handleCheckPDPA}
                  label="Confirm PDPA"
                  name="confirm PDPA"
                />
              </Grid>
              <Grid item xs={6}>
                <RadioBtnGroup />
              </Grid>
              <Grid item xs={6}>
                <CheckBoxBtnGroup hobbies={hobbies} setHobbies={handleCheck} />
              </Grid>
              <Grid item xs={12}>
                <SelectBox />
              </Grid>
              <Grid item xs={12}>
                <FormInput label="Note" name="note" />
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
                <Btn msg="Submit" type="submit" />
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
      <Grid xs={12} md={6}>
        <FormOutput users={users} setUsers={setUsers} />
        {/* <FormOutput name={users[0]?.name}  /> */}
      </Grid>
    </Grid>
  )
}
export default Form
