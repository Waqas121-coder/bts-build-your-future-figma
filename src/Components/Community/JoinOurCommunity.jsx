import { Box, Grid, Typography } from "@mui/material";
import { Container,Stack } from "@mui/system";
import React from "react";
import communityLinkin from "../../Images/communityLinkin.png";
import communityTelegrom from "../../Images/communityTelegrom.png";
import communityFB from "../../Images/communityFB.png";
import communityTwitter from "../../Images/communityTwitter.png";
import communityunknown from "../../Images/communityunknown.png";
import communityYT from "../../Images/communityYT.png";
let card = [
  {
    src: communityLinkin,
  },
  {
    src: communityTelegrom,
  },
  {
    src: communityFB,
  },
  {
    src: communityTwitter,
  },
  {
    src: communityunknown,
  },
  {
    src: communityYT,
  },
];

const JoinOurCommunity = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <Container>
        <Grid container spacing={2} direction="row-reverse">
          <Grid item md={6} sm={12} xs={12}>
            <Box
              sx={{
                background:
                  "linear-gradient(180deg, #48007C 0%, #6100BF 100%);",
                borderRadius: 10,
                py: { md: 13, sm: 10, xs: 5 },
                px: { md: 3, sm: 13, xs: 5 },
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "center",
                  flexWrap: "wrap",
                  p: { md: 2, sm: 1, xs: 0 },
                }}
                direction="row"
                gap={{xs:2,md:10}}
              >
                {card.map(({src}, index) => (
                  <Box
                    key={index}
                    sx={{
                      border: "2px solid #FFFFFF",
                      p: 2,
                      boxShadow: "0px 0px 4px 0px #FFFFFF",
                      borderRadius: 5,
                    }}
                  >
                    <img src={src} style={{ width: "60px" }} alt="src" />
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <Box sx={{ color: "#000", px: { md: 5, sm: 3, xs: 1 } }}>
              <Typography
                sx={{
                  fontSize: { md: "70px", sm: "50px", xs: "40px" },
                  fontWeight: 700,
                  color: "#48007C",
                  fontFamily: "Lato",
                  lineHeight: 1.2,
                }}
              >
                Lets Join Our Network Community
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: "24px", sm: "22px", xs: "20px" },
                  fontWeight: 400,
                  color: "#000",
                  fontFamily: "Lato",
                  mt: 1.7,
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default JoinOurCommunity;