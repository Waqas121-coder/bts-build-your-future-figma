import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import VectorImage from "../../Images/VectorImage.png";

const Joincommunity = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${VectorImage})`,
        backgroundSize: "cover",
        height: { md: "500px", sm: "400px", xs: "300px" },
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt:{xs:"5",md:15},
        py:{xs:15,sm:5}
      }}
    >
      <Container>
        <Box>
          <Typography
            sx={{
              fontSize: {xs:"50px",md:"72px"},
              color: "white",
              fontFamily: "Lato, sans-serif",
              fontWeight: "900",
              pt:12
            }}
          >
            Lets Join Our Community
          </Typography>
          <Typography
            sx={{
              fontSize: {md:"24px"},
              color: "white",
              fontFamily: "Lato, sans-serif",
              fontWeight: "400",
              my: {xs:2,md:5},
              width:{xs:"90%", sm:"75%",md:"65%"}
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
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
            Join Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Joincommunity;
