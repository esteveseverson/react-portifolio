import styled from "@emotion/styled"
import Avatar from "../../../../assets/images/avatar.png"
import { Button, Container, Grid, Typography } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';

const Home = () => {

    const StyledHero = styled("div")(() => ({
      backgroundColor: "black",
      height: '100vh'
    }))

    const StyledImage = styled("img")(() => ({
      width: '100%',
      borderRadius: '50%'
    }))

    return (
      <>
        <StyledHero>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <StyledImage src={Avatar}/>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography color="primary" variant="h1" textAlign={'center'}> Everson Esteves </Typography>
                <Typography color="primary" variant="h2" textAlign={'center'}> Software Engineer </Typography>
                <Grid container display={"flex"} justifyContent={"center"}>
                  <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                    <Button>
                      <DownloadIcon/>
                      Download CV
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                    <Button>
                      <SmartphoneOutlinedIcon/>
                      Contact me
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </StyledHero>
      </>
    )
  }
  
  export default Home
  