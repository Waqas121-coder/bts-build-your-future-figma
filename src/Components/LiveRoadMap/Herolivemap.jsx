import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react'
import heroLiveMap from "../../Images/heroLiveMap.png";
import LiveMap from "../../Images/LiveMap.png";
import Heroabout from "../About/Heroabout";
const Herolivemap = () => {
  return (
    <div>
      <Heroabout  name="Live RoadMap" livemap="" img= {heroLiveMap}  />
      <Container>
        <Box textAlign="center" my={15}>
            <Typography sx={{
                            fontSize: "72px",
                            color: "rgba(72, 0, 124, 1)",
                            fontFamily: "Lato",
                            fontWeight: "900",
                          }}>
            Roadmap
            </Typography>
            <Typography sx={{
                            fontSize: "24px",
                            fontFamily: "Lato",
                            fontWeight: "400",
                            mb:10,
                            px:{xs:0,sm:3,md:10}
                          }}>
            The Koraplay project roadmap is a technical guideline of what is to come. Our project is community driven, and we strive to achieve the goals we have set at the earliest.
            </Typography>
            <img src={LiveMap} alt="LiveMap" />
        </Box>
      </Container>
    </div>
  );
};

export default Herolivemap;
