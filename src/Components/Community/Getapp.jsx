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
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useState } from "react";
let Accordions = [
  {
    HeadingAccourdion: "Key concepts",
  },
  {
    HeadingAccourdion: "Wallets",
  },
  {
    HeadingAccourdion: "Exchanges",
  },
];
const Getapp = () => {
  const [expanded, setExpanded] = useState(false);
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
            Get App
            <Typography
              sx={{
                px: { xs: 0, sm: 5, md: 12 },
                color: "black",
                fontSize: "24px",
                fontFamily: "Lato, sans-serif",
                fontWeight: "400",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </Typography>
          </Typography>
          <Grid container>
            <Grid item>
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
                        expandIcon={
                          expanded ? (
                            <RemoveIcon
                              sx={{ color: "rgba(173, 0, 255, 1)" }}
                              onClick={() => setExpanded(false)}
                            />
                          ) : (
                            <AddIcon
                              sx={{ color: "rgba(173, 0, 255, 1)" }}
                              onClick={() => setExpanded(true)}
                            />
                          )
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography
                          sx={{
                            my: 1,
                            fontSize: "24px",
                            fontFamily: "Lato",
                            fontWeight: "700",
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
                            my: 2,
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

export default Getapp;
