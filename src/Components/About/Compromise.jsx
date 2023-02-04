import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import cardimg1 from "../../Images/cardimg1.png";
import cardimg2 from "../../Images/cardimg2.png";
import cardimg3 from "../../Images/cardimg3.png";
import cardimg4 from "../../Images/cardimg4.png";
import cardimg5 from "../../Images/cardimg5.png";
let card = [
  {
    src: cardimg1,
    heading: "Safer smart contracts",
  },
  {
    src: cardimg2,
    heading: "No-cost transactions",
  },
  {
    src: cardimg3,
    heading: "Energy efficient at scale",
  },
  {
    src: cardimg4,
    heading: "Proven security",
  },
  {
    src: cardimg5,
    heading: "Industrial scalability",
  },
];
const Compromise = () => {
  return (
    <Container>
      <Box sx={{ p: {md:"50px", sm:"20px",xs:"0px" } }}>
        <Container>
          <Box sx={{mt:{xs:"25px", sm:"5px", md:"0px"}}}>
            <Typography
              sx={{
                color: "#48007C",
                fontSize: {xs:"23px", sm:"30px" ,md:"43px"},
                fontFamily: "Lato, sans-serif",
                fontWeight: "700",
              }}
            >
              Build without compromise
            </Typography>
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 1)",
                fontSize: {xs:"16px",sm:"20px",md:"24px"},
                fontFamily: "Lato, sans-serif",
                fontWeight: "400",
                pr: {xs:"opx", sm:"5px", md:"37px"},
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </Box>
          <Box sx={{my:"50px"}}>
            <Grid container spacing={3}>
              {card.map(({ src, heading }, index) => (
                <Grid item md={4} sm={6} xs={12} key={index}>
                  <Box sx={{ boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.25)", height:"100%" }}>
                  <Box sx={{ p:3 }}>
                    <img src={src} alt="card img first" />
                    <Box>
                      <Typography
                        sx={{
                          color: "#48007C",
                          fontSize: "24px",
                          fontFamily: "Lato, sans-serif",
                          fontWeight: "700",
                        }}
                      >
                        {heading}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontFamily: "Lato, sans-serif",
                          fontWeight: "400",
                        }}
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </Typography>
                    </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default Compromise;
