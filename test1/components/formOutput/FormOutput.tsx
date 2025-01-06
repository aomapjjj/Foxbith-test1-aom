import Box from "@mui/material/Box"
import { Stringifier } from "styled-components/dist/types"

type FormOutput = {
    no? : String
    name? : String
    email? : String
    gender? : String
    hobby? : string
    status? : string
    note? : string
}


const FormOutput = (props:FormOutput) => { 
    const { no , name , email , gender , hobby , status , note } = props
  return (
    <div>
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
        <h4>User {no} </h4>
        <p>Name : {name ? name : '-'} </p>
        <p>Email : {email ? email : '-'} </p>
        <p>Gender :  {gender ? gender : '-'}</p>
        <p>Hobby : {hobby ? hobby : '-'} </p>
        <p>Status : {status ? status : '-'} </p>
        <p>Note : {note ? note : '-'} </p>


      </Box>
    </div>
  )
}
export default FormOutput
