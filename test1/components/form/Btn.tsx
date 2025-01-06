import Button from "@mui/material/Button"

type BtnProps = {
  msg: string
  type?: string
}

const Btn = (props: BtnProps) => {
  const { msg } = props
  return (
    <div>
      <Button variant="contained" type="submit" >
        {msg}
      </Button>
    </div>
  )
}
export default Btn
