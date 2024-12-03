import styled from "@emotion/styled"
import Avatar from "../../../../assets/images/avatar.png"
import { Box, Container, Grid, Typography } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import theme from "../../../../theme.ts"
import StyledButton from "../../../../components/StyledButton/StyledButton.tsx";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground.tsx";

const Hero = () => {

    const StyledHero = styled("div")(() => ({
      backgroundColor: theme.palette.primary.main,
      height: '100vh',
      display: 'flex',
      alignItems: 'center'
    }))

    const StyledImage = styled("img")(() => ({
      width: '80%',
      borderRadius: '50%',
      border: `2px solid ${theme.palette.primary.contrastText}`
    }))

    return (
      <>
        <StyledHero>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} md={5}>
                <Box position="relative">
                    <Box position="absolute" width={"150%"} top={-100} right={0}>
                        <AnimatedBackground />
                    </Box>
                    <Box position="relative" textAlign="center">
                        <StyledImage src={Avatar} />
                    </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={7}>
                <Typography color="primary.contrastText" variant="h1" textAlign={'center'} pb={2}> Everson Esteves </Typography>
                <Typography color="primary.contrastText" variant="h2" textAlign={'center'}> Software Engineer </Typography>
                <Grid container display={"flex"} justifyContent={"center"} spacing={2} pt={3}>
                  <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                    <StyledButton>
                      <DownloadIcon/>
                      <Typography>
                        Download CV
                      </Typography>
                    </StyledButton>
                  </Grid>
                  <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                    <StyledButton>
                      <SmartphoneOutlinedIcon/>
                      <Typography>
                        Contact Me
                      </Typography>
                    </StyledButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </StyledHero>
      </>
    )
  }
  
  export default Hero
  