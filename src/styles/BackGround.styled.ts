import styled from "styled-components";

export const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -90;
  overflow: hidden;
`;

export const BlurBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0);
  backdrop-filter: blur(80px);
`;

export const FirstImage = styled.img`
  position: absolute;
  width: 40%;
  height: 30%;
  left: 30%;
  top: 0;
  z-index: -95;
`;

export const SecondImage = styled.img`
  position: absolute;
  width: 65%;
  height: auto;
  top: 0;
  left: 0;
  z-index: -96;
`;
export const ThirdImage = styled.img`
  position: absolute;
  width: auto;
  height: auto;
  right: 0;
  bottom: 0;
  z-index: -97;
`;
export const FourthImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -98;
`;
export const FifthImage = styled.img`
  position: absolute;
  width: 30%;
  height: 40%;
  left: 0;
  bottom: 0;
  z-index: -94;
`;
