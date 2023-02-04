import { Box, Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
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
const Joincommunity = () => {
  return (
    <Container>
      <Box py={10}>
        <Stack gap={5} direction={{ xs: "column", sm: "column", md:"row" }}>
          <Box width={{ xs: "100%", sm: "100%",md:"50%" }}>
            <Typography
              sx={{
                fontSize: { xs: "50px", md: "72px" },
                color: "rgba(72, 0, 124, 1)",
                fontFamily: "Lato",
                fontWeight: "900",
                lineHeight: 1,
              }}
            >
              Lets Join Our Network Community
            </Typography>
            <Typography
              pt={{ xs: 2, md: 6 }}
              sx={{
                pt: { xs: 2, md: 6 },
                fontSize: "24px",
                fontFamily: "Lato",
                fontWeight: "400",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </Box>
          <Box
            width={{ xs: "100%", md: "50%" }}
            sx={{
              py: 2,
              // px:5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "linear-gradient(180deg, #48007C 0%, #6100BF 100%)",
              borderRadius: "36px",
            }}
          >
            <Grid container spacing={3} justifyContent={"space-between"}>
              {card.map(({ src }, index) => (
                <Grid item md={4}  xs={6}>
                  <Box
                    mx="auto"
                    sx={{
                      width: "100px",
                      height: "100px",
                      border: "1px solid white",
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img key={index} src={src} alt="ok" sx={{ width: "100%" }} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default Joincommunity;
