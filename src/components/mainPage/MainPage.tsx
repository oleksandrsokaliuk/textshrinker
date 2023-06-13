import React, { FC } from "react";
import { useField, Form, FormikProps, Formik } from "formik";
import ShrinkForm from "./ShrinkForm";
import {
  Container,
  Header,
  Paragraph,
} from "../../styles/mainPage/MainPage.styled";
import ShortUrl from "./ShortUrl";
import { useSelector } from "react-redux";
import { IShrinkerState } from "../../types/types";

const MainPage = () => {
  const shortUrl = useSelector<IShrinkerState>((state) => state.shortUrl);
  console.log(shortUrl);
  return (
    <Container>
      <Header>Welcome</Header>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        ad dicta! Repellat unde cupiditate doloribus
      </Paragraph>
      <ShrinkForm />
      <ShortUrl />
    </Container>
  );
};

export default MainPage;
