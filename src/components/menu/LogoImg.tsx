import React, { FC } from "react";
import logo from "./../../assets/logo.svg";
import { Logo } from "../../styles/LogoImg.styled";
import { useNavigate } from "react-router-dom";
import { locations } from "../../routing/routes";

const LogoImg: FC = () => {
  const navigate = useNavigate();
  return (
    <Logo
      onClick={() => {
        navigate(locations.MAIN);
      }}
      src={logo}
    />
  );
};

export default LogoImg;
