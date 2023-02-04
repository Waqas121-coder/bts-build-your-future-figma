import { Box, Grid, Typography } from "@mui/material";
import { Container, styled } from "@mui/system";
import React from "react";
// import logo from "../../Images/logo.png";
const Listfooter = styled(Typography)`
fontSize: "18px",
fontFamily: "Lato, sans-serif",
fontWeight: "500",
`;
const Footer = () => {
  return (
    <Container>
      <Box my={{ xs: 5, md: 15 }}>
        <Grid container spacing={{xs:5,md:3}}>
          <Grid item md={4} xs={12}>
            <Box
              sx={{
                display: {xs:"flex", md:"block"},
                justifyContent: "center",
                alignItems: "center",
                pb: 5,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  width: "238px",
                  height: "238px",
                  background:
                    "linear-gradient(180deg, #6100BF 0%, #AD00FF 100%)",
                  borderRadius: "50%",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "36px",
                    fontFamily: "Lato, sans-serif",
                    fontWeight: "700",
                  }}
                >
                  Logo <br /> here
                </Typography>
              </Box>
              {/* <img src={logo} alt="logoimage"  style={{width:"100%", maxWidth:"200px"}} /> */}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={1.5}>
            {/* <Box display="flex" justifyContent="center"> */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                justifyContent: "space-around",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "rgba(72, 0, 124, 1)",
                  fontFamily: "Lato, sans-serif",
                  fontWeight: "700",
                }}
              >
                Links
              </Typography>
              <Listfooter>Wallets</Listfooter>
              <Listfooter>Exchanges</Listfooter>
              <Listfooter>Explorer</Listfooter>
              <Listfooter>Docs</Listfooter>
              <Listfooter>Blog</Listfooter>
              <Listfooter>Roadmap</Listfooter>
            </Box>
            {/* </Box> */}
          </Grid>
          <Grid item xs={12} sm={6} md={2.5}>
          {/* <Box display="flex" justifyContent="center"> */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                justifyContent: "space-around",
                pt: { xs: 3, md: 0 },
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "rgba(72, 0, 124, 1)",
                  fontFamily: "Lato, sans-serif",
                  fontWeight: "700",
                }}
              >
                Links
              </Typography>
              <Listfooter>Pact language resources</Listfooter>
              <Listfooter> Useful tools</Listfooter>
              <Listfooter>Quickstart</Listfooter>
              <Listfooter> Pact developer tutorials</Listfooter>
              <Listfooter>Chat on Discord</Listfooter>
            </Box>
            {/* </Box> */}
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
          {/* <Box display="flex" justifyContent="center"> */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                justifyContent: "space-around",
                pt: { xs: 3, md: 0 },
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "rgba(72, 0, 124, 1)",
                  fontFamily: "Lato, sans-serif",
                  fontWeight: "700",
                }}
              >
                Links
              </Typography>
              <Listfooter>Grants</Listfooter>
              <Listfooter>Developer program</Listfooter>
              <Listfooter>Ambassadors</Listfooter>
              <Listfooter>Careers</Listfooter>
            </Box>
            {/* </Box> */}
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
          {/* <Box display="flex" justifyContent="center"> */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                justifyContent: "space-around",
                pt: { xs: 3, md: 0 },
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "rgba(72, 0, 124, 1)",
                  fontFamily: "Lato, sans-serif",
                  fontWeight: "700",
                }}
              >
                Links
              </Typography>
              <Listfooter>About</Listfooter>
              <Listfooter> Team</Listfooter>
              <Listfooter> FAQ</Listfooter>
              <Listfooter> Whitepapers</Listfooter>
            </Box>
            {/* </Box> */}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
