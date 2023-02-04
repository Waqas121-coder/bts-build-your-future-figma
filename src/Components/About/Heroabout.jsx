import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import heroabout from "../../Images/heroabout.png";

const Heroabout = (props) => {
  // console.log(props);
  return (
    <Container>
      <Typography
        sx={{
          fontSize: { md: "122px", sm: "70px", xs: "40px" },
          fontFamily: "Lato, sans-serif",
          fontWeight: "700",
          color: "rgba(97, 0, 191, 1)",
          pl: { md: "30px", sm: "10px", xs: "5px" },
          lineHeight: 1,
        }}
      >
        {props?.name ?? "Build the Future"}
      </Typography>
      <Box
        sx={{
          backgroundImage: `url(${props?.img ?? heroabout})`,
          backgroundSize: "cover",
          height: { md: "500px", sm: "400px", xs: "300px" },
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: { md: "122px", sm: "70px", xs: "40px" },
            fontFamily: "Lato, sans-serif",
            fontWeight: "700",
            pl: { md: "30px", sm: "10px", xs: "5px" },
            lineHeight: 1,
          }}
        >
          {props?.livemap ?? "on Name Here"}
        </Typography>
      </Box>
    </Container>
  );
};

export default Heroabout;
