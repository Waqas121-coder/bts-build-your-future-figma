import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useState } from "react";
let Accordions = [
  {
    HeadingAccourdion: "Supporting Ethereum bridge proofs in Chainweb 2.4",
  },
  {
    HeadingAccourdion: "Publishing new token economics document",
  },
  {
    HeadingAccourdion: "Launching Kadenaswap “Bountyswap” on mainnet",
  },
];
const February = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Container>
      <Box my={5}>
        <Grid container direction="row-reverse">
          <Grid item md={3} xs={12}>
            <Box
              sx={{
                textAlign: "center",
                borderLeft: "5px solid rgba(136, 0, 255, 1)",
                boxShadow: "0px 0px 28px 0px rgba(0, 0, 0, 0.25)",
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  fontFamily: "Lato, sans-serif",
                  fontWeight: "900",
                  py: 3,
                }}
              >
                February 2021
              </Typography>
            </Box>
          </Grid>

          <Grid item md={9} xs={12}>
            <Box
              sx={{ mr: { xs: 0, md: 5 }, mt: { xs: 2, md: 0 } }}
              display="flex"
              flexDirection="column"
              gap={5}
            >
              {Accordions.map(({ HeadingAccourdion }, index) => (
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
                    </AccordionDetails>
                  </Accordion>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default February;
