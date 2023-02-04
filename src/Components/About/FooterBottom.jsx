import { Container, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import footer1 from "../../Images/footer1.png"
import footer2 from "../../Images/footer2.png"
import footer3 from "../../Images/footer3.png"
import footer4 from "../../Images/footer4.png"
import footer5 from "../../Images/footer5.png"
import footer6 from "../../Images/footer6.png"

const FooterBottom = () => {
  return (
    <Box sx={{py:3,boxShadow:"1px 0px 23px 0px rgba(0, 0, 0, 0.25)"}}>
    <Container>
      <Stack
        alignItems={"center"}
        direction={{ xs: "column", md: "row" }}
        gap={3}
        justifyContent="space-between"
      >
        <Box>
          <Typography>Name Here All rights reserved @ 2023</Typography>
        </Box>
        <Box sx={{display:"flex", gap:"30px"}}>
            <img src={footer1} alt="footer1" />
            <img src={footer2} alt="footer2" />
            <img src={footer3} alt="footer3" />
            <img src={footer4} alt="footer4" />
            <img src={footer5} alt="footer5" />
            <img src={footer6} alt="footer6" />
        </Box>
      </Stack>
    </Container>
    </Box>
  );
};

export default FooterBottom;
