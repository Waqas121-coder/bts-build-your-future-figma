import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Grid,
    Typography,
  } from "@mui/material";
  import { Container } from "@mui/system";
// import BestideaArrow from "../../Images/BestideaArrow.png";
import BestideaArrowDown from "../../Images/BestideaArrowDown.png";

  import React from "react";
  let Accordions = [
    {
      HeadingAccourdion: "Developer Quickstart",
    },
    {
      HeadingAccourdion: "Pact tutorials",
    },
    {
      HeadingAccourdion: "Teaches",
    },
    {
      HeadingAccourdion: "Guides to accounts & keysets",
    },
    {
        HeadingAccourdion: "Getting started with transfers",
      },
  ];
  const Tutorial = () => {
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
              Tutorial & guides
            </Typography>
            <Grid container>
             
  
              <Grid item >
                <Box
                  sx={{ mt: { xs: 2, md: 0 } }}
                  display="flex"
                  flexDirection="column"
                  gap={5}
                >
                  {Accordions.map(({ HeadingAccourdion, Textbutton }, index) => (
                    <Box
                      sx={{ boxShadow: "0px 0px 28px rgba(0, 0, 0, 0.25)" }}
                      key={index}
                    >
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<img src={BestideaArrowDown} alt="BestideaArrowDown" />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography
                            sx={{
                              my: .2,
                              fontSize: "24px",
                              fontFamily: "Lato",
                              fontWeight: "900",
                            }}
                          >
                            {HeadingAccourdion}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
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
                        </AccordionDetails>
                      </Accordion>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
    );
  };
  
  export default Tutorial;
  