import React, { useEffect, useState } from "react";
import { Box, styled } from "@mui/system";
import NavigationIcon from '@mui/icons-material/Navigation'

const Wrapper = styled(Box)`
display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const ImgBox = styled(Box)`
font-size: 2rem;
    width: 4rem;
    height: 4rem;
    color: #fff;
    background: linear-gradient(180deg, #6100BF 0%, #AD00FF 100%);
    box-shadow: 0 0 10px grey;
    border-radius: 50%;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
// const IconAnimate = styled(NavigationIcon)`
// animation: gototop 1.2s linear infinite alternate-reverse;
// `;
const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Wrapper>
      {isVisible && (
        <ImgBox onClick={goToBtn}>
          <NavigationIcon  />
        </ImgBox>
      )}
    </Wrapper>
  );
};


export default GoToTop;

