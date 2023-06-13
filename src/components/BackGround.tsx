import React, { FC } from "react";
import { useField, Form, FormikProps, Formik } from "formik";
import {
  BackgroundContainer,
  BlurBackground,
  FifthImage,
  FirstImage,
  FourthImage,
  SecondImage,
  ThirdImage,
} from "../styles/BackGround.styled";

import firstImg from "./../assets/first-background.svg";
import secondImg from "./../assets/second-background.svg";
import thirdImg from "./../assets/third-background.svg";
import fourthImg from "./../assets/fourth-background.svg";
import fifthImg from "./../assets/fifth-background.svg";

const BackGround: FC = () => {
  return (
    <BackgroundContainer>
      <BlurBackground />
      <FirstImage src={firstImg} />
      <SecondImage src={secondImg} />
      <ThirdImage src={thirdImg} />
      <FourthImage src={fourthImg} />
      <FifthImage src={fifthImg} />
    </BackgroundContainer>
  );
};

export default BackGround;
