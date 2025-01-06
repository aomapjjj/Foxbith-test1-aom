import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

export default function MenuAppBar() {
  //   const [auth, setAuth] = React.useState(true)
  //   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setAuth(event.target.checked)
  //   }

  //   const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
  //     setAnchorEl(event.currentTarget)
  //   }

  //   const handleClose = () => {
  //     setAnchorEl(null)
  //   }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h3"
            display="flex"
            justifyContent="center"
            alignItems="center"
            component="div"
            sx={{ flexGrow: 1, justifyItems: "center" }}
          >
            <p>User profile management System</p>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
