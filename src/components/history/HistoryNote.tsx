import * as React from "react";
import { Container, Header } from "../../styles/mainPage/MainPage.styled";

export interface IHistoryNoteProps {
  favourite: boolean;
  creationDate: Date | string;
  expiryDate: Date | string;
  longUrl: string;
  shortUrl: string;
  clicks: number;
}

const HistoryNote: React.FC = () => {
  return <div></div>;
};

export default HistoryNote;
