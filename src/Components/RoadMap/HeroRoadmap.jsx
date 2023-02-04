import React from "react";
import heroRoadmap from "../../Images/heroRoadmap.png";
import Heroabout from "../About/Heroabout";
const HeroRoadmap = () => {
  return (
    <div>
      <Heroabout name="Name here" livemap="Live RoadMap" img= {heroRoadmap} />
    </div>
  );
};

export default HeroRoadmap;
