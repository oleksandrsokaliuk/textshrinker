import React, { FC, ReactNode } from "react";
import { useField, Form, FormikProps, Formik } from "formik";
import ShrinkForm from "./ShrinkForm";
import {
  Container,
  Header,
  Paragraph,
} from "../../styles/mainPage/MainPage.styled";
import { useSelector } from "react-redux";
import { IShrinkerState } from "../../types/types";
import { useAppSelector } from "../../redux/reducers/shrinkerSlice";
import {
  ShortUrlContainer,
  ShortUrlLink,
} from "../../styles/mainPage/ShortUrl.styled";

const ShortUrl: FC = (props) => {
  const shortUrl = useAppSelector((state) => state.shrinkerSlice.shortUrl);
  console.log(shortUrl);
  return shortUrl ? (
    <ShortUrlContainer>
      <ShortUrlLink href={shortUrl as string} target="_blank">
        {shortUrl as ReactNode}
      </ShortUrlLink>
    </ShortUrlContainer>
  ) : (
    <></>
  );
};

export default ShortUrl;
