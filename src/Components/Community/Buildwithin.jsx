import { Box, Button, Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";
let card = [
  {
    headingcards: "Run a node",
  },
  {
    headingcards: "Chain Relay",
  },
  {
    headingcards: "DAO",
  },
  {
    headingcards: "Content creator",
  },
  {
    headingcards: "Moderator",
  },
  {
    headingcards: "Community leader",
  },
  
];
const Buildwithin = () => {
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
              textAlign:"center"
            }}
          >
            Build from within
          </Typography>
          <Stack
            direction={{ md: "row", xs: "column", sm: "column" }}
            mt={{ xs: 5, md: 5 }}
            // width={{xs:"100%",md:"70%"}}
          >
            <Grid container spacing={4}>
              {card.map(({ headingcards }, index) => (
                <Grid item md={4} sm={6} xs={12} key={index}>
                  <Box
                    sx={{
                      boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.25)",
                      textAlign: "center",
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
                      <Button
                      variant="contained"
                      sx={{
                        background:
                          "radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%)",
                        width: "120px",
                        borderRadius: "36px",
                        my:2
                      }}
                    >
                      Start Now
                    </Button>
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

export default Buildwithin;
