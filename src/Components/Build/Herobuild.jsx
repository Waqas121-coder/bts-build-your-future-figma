import React from "react";
import heroBuild from "../../Images/heroBuild.png";
import Heroabout from "../About/Heroabout";
const Herobuild = () => {
  return (
    <div>
      <Heroabout  name="Build Smart" livemap="with Pact" img= {heroBuild}  />
    </div>
  );
};

export default Herobuild;
