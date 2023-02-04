import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
let Accordions = [
    {
      Heading: "Rapid launch",
        Text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      Heading: "A smart contract first",
      Text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    },
    {
      Heading: "Powered by Pact",
      Text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    },
  ];
const Casestudy = () => {
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
            Case study
          </Typography>
          <Stack
            direction={{ md: "row", xs: "column", sm: "column" }}
            mt={{ xs: 5, md: 10 }}
          >
            <Grid container spacing={12}>
              <Grid item md={12}>
                <Box
                  sx={{
                    boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.25)",
                    textAlign: "left",
                    borderTop: "10px solid rgba(136, 0, 255, 1)",
                    height: "100%",
                  }}
                >
                {Accordions.map(({ Heading, Text }, index) => (
                  <Box sx={{ p: 3 }} key={index}>
                    <Typography
                      sx={{
                        fontSize: "28px",
                        color: "rgba(72, 0, 124, 1)",
                        fontFamily: "Lato",
                        fontWeight: "700",
                      }}
                    >
                      {Heading}
                    </Typography>
                    <Typography sx={{ py: 1, fontSize: "18px",fontFamily: "Lato",
                        fontWeight: "400", width:"80%" }}>
                      {Text}
                    </Typography>
                  </Box>
                  ))}
                  <Box textAlign="center">
                  <Button
                      variant="contained"
                      sx={{
                        background:
                          "radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%)",
                        width: "150px",
                        borderRadius: "36px",
                        my:2
                      }}
                    >
                      Start Now
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </Container>
  );
};

export default Casestudy;
