import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
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
  IconContainer,
  ShortUrlContainer,
  ShortUrlLink,
  TextIsCopiedContainer,
  TextIsCopiedParagraph,
} from "../../styles/mainPage/ShortUrl.styled";
import pencilIcon from "./../../assets/pencil.svg";
import qrIcon from "./../../assets/qr.svg";
import copyIcon from "./../../assets/copy.svg";
import { TableIcon } from "../../styles/history/History.styled";

const ShortUrl: FC = (props) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const shortUrl = useAppSelector((state) => state.persistedReducer.shortUrl);
  const [shortUrlForRender, setShortUrlForRender] = useState<string>("");
  useEffect(() => {
    setShortUrlForRender(shortUrl);
  }, [shortUrl]);
  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(shortUrl);
    console.log("text is copied" + shortUrl);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };
  return shortUrl ? (
    <>
      <ShortUrlContainer>
        <ShortUrlLink href={shortUrl as string} target="_blank">
          {shortUrl as ReactNode}
        </ShortUrlLink>
        <IconContainer>
          <TableIcon src={pencilIcon} />
          <TableIcon src={qrIcon} />
          <TableIcon src={copyIcon} onClick={copyToClipboard} />
        </IconContainer>
      </ShortUrlContainer>
      {isCopied && (
        <TextIsCopiedContainer>
          <TextIsCopiedParagraph>
            The link is copied to your clipboard
          </TextIsCopiedParagraph>
        </TextIsCopiedContainer>
      )}
    </>
  ) : (
    <></>
  );
};

export default ShortUrl;
