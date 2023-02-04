import { Box, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import redYT from "../../Images/redYT.png";
import TextYT from "../../Images/TextYT.png";

let card = [
  {
    headingcards: "Don't get Rekt - Build Safer",
  },
  {
    headingcards: "Fireside: Stuart & Mason",
  },
  {
    headingcards: "Stuart Haber Fireside Chat !",
  },
  {
    headingcards: "How Chainweb Works",
  },
];
const Youtube = () => {
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
            Watch with us
          </Typography>
          <Stack
            direction={{ md: "row", xs: "column", sm: "column" }}
            mt={{ xs: 5, md: 10 }}
          >
            <Grid container spacing={4}>
              {card.map(({ headingcards }, index) => (
                <Grid item md={6} sm={12} xs={12} key={index}>
                  <Box
                    sx={{
                      boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.25)",
                      background: index === 2 ? "linear-gradient(180deg, #48007C 75.57%, rgba(72, 0, 124, 0.61) 100%)":"rgba(40, 40, 40, 1)",
                      textAlign: "left",
                    }}
                  >
                    <Box sx={{ p: 3 }}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box
                          sx={{
                            width: "45px",
                            height: "45px",
                            background: "white",
                            borderRadius: "50%",
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: {xs:"15px",md:"18px"},
                            color: "white",
                            fontFamily: "Lato",
                            fontWeight: "900",
                            pl:1
                          }}
                        >
                          {headingcards}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          py:8
                        }}
                      >
                        <img src={redYT} alt="redYT" />
                      </Box>
                      <Box sx={{textAlign:"end"}}>
                        <img src={TextYT} alt="TextYT" />
                      </Box>
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

export default Youtube;
