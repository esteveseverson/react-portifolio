import styled from "@emotion/styled"
import { AppBar, MenuItem, Toolbar } from "@mui/material"
// import theme from "../../theme.ts"

const NavBar = () => {

    const StyledToolbar = styled(Toolbar)(() => ({
        display: 'flex',
        justifyContent: 'space-evenly'
    }))

    return (
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Projects</MenuItem>
                </StyledToolbar>
            </AppBar>
        </>
    )
}

export default NavBar