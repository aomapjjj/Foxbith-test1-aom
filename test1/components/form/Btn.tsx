import Button from "@mui/material/Button"

type BtnProps = {
  msg: string
  type?: string
}

const Btn = (props: BtnProps) => {
  const { msg, type } = props
  return (
    <div>
      <Button variant="contained" type={type}  >
        {msg}
      </Button>
    </div>
  )
}
export default Btn
