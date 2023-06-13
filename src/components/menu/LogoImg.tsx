import React, { FC } from "react";
import logo from "./../../assets/logo.svg";
import { Logo } from "../../styles/LogoImg.styled";

const LogoImg: FC = () => {
  return <Logo src={logo} />;
};

export default LogoImg;
