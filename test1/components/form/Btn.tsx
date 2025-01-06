import Button from '@mui/material/Button';

type BtnProps = {
    msg : string
}

const Btn = (props:BtnProps) => {
    const { msg } = props
  return (
    <div><Button variant="contained">{msg}</Button></div>
  )
}
export default Btn