import React, { FC } from "react";
import { useField, Form, FormikProps, Formik } from "formik";
import {
  Container,
  Header,
  Paragraph,
} from "../../styles/mainPage/MainPage.styled";
import { useSelector } from "react-redux";
import { IShrinkerState } from "../../types/types";
import { MenuIcon, MenuWrapper } from "../../styles/menu/Menu.styled";
import history from "./../../assets/history.svg";
import theme from "./../../assets/theme.svg";
import authorization from "./../../assets/authorization.svg";
import LogoImg from "./LogoImg";
import { Link, useNavigate } from "react-router-dom";
import { locations } from "../../routing/routes";

const Menu: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <LogoImg />
      <MenuWrapper>
        <MenuIcon onClick={() => navigate(locations.HISTORY)} src={history} />
        <MenuIcon src={theme} />
        <MenuIcon
          onClick={() => navigate(locations.LOGIN)}
          src={authorization}
        />
      </MenuWrapper>
    </div>
  );
};

export default Menu;
