import { Box, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import BestideaArrow from "../../Images/BestideaArrow.png";
import React from "react";

let card = [
  {
    headingcards: "Developer program",
  },
  {
    headingcards: "Technical grants",
  },
  {
    headingcards: "Developer community",
  },
  {
    headingcards: "Share a proposal",
  },
];
const BestIdeas = () => {
  return (
    <Container>
      <Box>
        <Container>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "45px", md: "72px" },
              fontFamily: "Lato, sans-serif",
              fontWeight: "900",
              color: "rgba(72, 0, 124, 1)",
              my: 5,
            }}
          >
            Build your best ideas with us
          </Typography>
          <Stack
            direction={{ md: "row", xs: "column", sm: "column" }}
            mt={{ xs: 5, md: 10 }}
          >
            <Grid container spacing={4}>
              {card.map(({ headingcards }, index) => (
                <Grid item md={6} sm={6} xs={12} key={index}>
                  <Box
                    sx={{
                      boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.25)",
                      textAlign: "left",
                      borderTop: "5px solid rgba(136, 0, 255, 1)",
                      height: "100%",
                    }}
                  >
                    <Box sx={{ p: 3 }}>
                      <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                      <Typography
                        sx={{
                          fontSize: "24px",
                          color: "rgba(72, 0, 124, 1)",
                          fontFamily: "Lato",
                          fontWeight: "700",
                        }}
                      >
                        {headingcards}
                      </Typography>
                            <img  src={BestideaArrow} alt="BestideaArrow" />
                      </Box>
                      <Typography sx={{ py: 3, fontSize: "18px",fontFamily: "Lato", }}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>
    </Container>
  );
};

export default BestIdeas;
