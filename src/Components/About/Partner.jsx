import { Button, Grid, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";
import partnetimage1 from "../../Images/partnetimage1.png";
import partnetimage2 from "../../Images/partnetimage2.png";
import partnetimage3 from "../../Images/partnetimage3.png";
import partnetimage4 from "../../Images/partnetimage4.png";
import partnetimage5 from "../../Images/partnetimage5.png";
import partnetimage6 from "../../Images/partnetimage6.png";
import partnetimage7 from "../../Images/partnetimage7.png";
import partnetimage8 from "../../Images/partnetimage8.png";
import partnetimage9 from "../../Images/partnetimage9.png";
let card = [
  {
    src: partnetimage1,
  },
  {
    src: partnetimage2,
  },
  {
    src: partnetimage3,
  },
  {
    src: partnetimage4,
  },
  {
    src: partnetimage5,
  },
  {
    src: partnetimage6,
  },
  {
    src: partnetimage7,
  },
  {
    src: partnetimage8,
  },
  {
    src: partnetimage9,
  },
];
const Partner = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={6.8}>
          <Stack
            direction="row"
            gap={8}
            flexWrap="wrap"
            justifyContent={"center"}
            sx={{
              // p: 2,
              py: { xs: 5, md: 17 },
              background: "rgba(229, 229, 229, 0.5)",
              border: "1px solid rgba(72, 0, 124, 1)",
              borderRadius: "36px",
            }}
          >
            {card.map(({ src }, index) => (
              <img
                key={index}
                src={src}
                alt="ok"
                width={"150px"}
                style={{ aspectRatio: "auto" }}
              />
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={5.2}>
          <Box sx={{ pl: { xs: 0, md: 3 } }}>
            <Typography
              sx={{
                pt: 4,
                fontSize: { xs: "50px", md: "72px" },
                fontFamily: "Lato, sans-serif",
                fontWeight: "700",
                color: "rgba(72, 0, 124, 1)",
                lineHeight: 1,
              }}
            >
              Our partners, your products
            </Typography>
            <Typography
              sx={{
                py: 5,
                fontSize: "24px",
                fontFamily: "Lato, sans-serif",
                fontWeight: "400",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
            <Button
              variant="contained"
              sx={{
                background:
                  "radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%)",
                width: "120px",
                borderRadius: "36px",
              }}
            >
              Docs
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Partner;
