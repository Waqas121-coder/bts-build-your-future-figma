import { Box, Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";
let card = [
  {
    headingcards: "DeFi",
  },
  {
    headingcards: "NFT",
  },
  {
    headingcards: "Interop",
  },
  {
    headingcards: "Multi-protocol",
  },
];
const CompromiseBuild = () => {
  return (
    <Container>
      <Box>
        <Container>
          <Typography
            sx={{
              color: "#48007C",
              fontSize: { xs: "23px", sm: "30px", md: "72px" },
              fontFamily: "Lato, sans-serif",
              fontWeight: "700",
              mt: {xs:2,md:5},
            }}
          >
            Build without compromise
          </Typography>
          <Stack
            direction={{ md: "row", xs: "column", sm: "column" }}
            mt={{ xs: 5, md: 10 }}
            width={{xs:"100%",md:"70%"}}
          >
            <Grid container spacing={4}>
              {card.map(({ headingcards }, index) => (
                <Grid item md={6} key={index}>
                  <Box
                    sx={{
                      boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.25)",
                      textAlign: "left",
                      borderTop: "5px solid rgba(136, 0, 255, 1)",
                      height: "100%",
                    }}
                  >
                    <Box sx={{ p: 3 }}>
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
                      <Typography sx={{ py: 3, fontSize: "18px",fontFamily: "Lato",
                          fontWeight: "400", }}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
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

export default CompromiseBuild;
