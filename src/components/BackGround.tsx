import React, { FC } from "react";
import { useField, Form, FormikProps, Formik } from "formik";
import {
  FifthImage,
  FirstImage,
  FourthImage,
  SecondImage,
  ThirdImage,
} from "../styles/BackGround.styled";

import firstImg from "./../assets/first-background.svg";

const BackGround: FC = () => {
  return (
    <div>
      <FirstImage />
      <SecondImage />
      <ThirdImage />
      <FourthImage />
      <FifthImage />
    </div>
  );
};

export default BackGround;
