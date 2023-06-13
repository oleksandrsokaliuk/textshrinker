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

const Menu: FC = () => {
  const shortUrl = useSelector<IShrinkerState>((state) => state.shortUrl);
  console.log(shortUrl);
  return (
    <div>
      <LogoImg />
      <MenuWrapper>
        <MenuIcon src={history} />
        <MenuIcon src={theme} />
        <MenuIcon src={authorization} />
      </MenuWrapper>
    </div>
  );
};

export default Menu;
