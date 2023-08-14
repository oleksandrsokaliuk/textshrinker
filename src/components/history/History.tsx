import * as React from "react";
import { Container, Header } from "../../styles/mainPage/MainPage.styled";
import { IHistoryNoteProps } from "./HistoryNote";
import pencilIcon from "./../../assets/pencil.svg";
import qrIcon from "./../../assets/qr.svg";
import copyIcon from "./../../assets/copy.svg";
import deleteIcon from "./../../assets/delete.svg";
import favouriteIcon from "./../../assets/favourite.svg";
import {
  FavouriteIcon,
  Table,
  TableData,
  TableIcon,
  TableRow,
} from "../../styles/history/History.styled";
import {
  TextIsCopiedContainer,
  TextIsCopiedParagraph,
} from "../../styles/mainPage/ShortUrl.styled";
import { useAppSelector } from "../../redux/reducers/shrinkerSlice";

const mockDataObjFirst: IHistoryNoteProps = {
  favourite: false,
  creationDate: new Date(Date.now()),
  expiryDate: new Date(Date.now() + 604800),
  longUrl: "htps://youtube.com",
  shortUrl: "youte.be",
  clicks: 0,
};

const mockDataObjSecond: IHistoryNoteProps = {
  favourite: true,
  creationDate: new Date(Date.now()),
  expiryDate: new Date(Date.now() + 604800),
  longUrl: "htps://facebook.com",
  shortUrl: "face.book",
  clicks: 5,
};

const History: React.FC = () => {
  const [isCopied, setIsCopied] = React.useState<boolean>(false);
  const mockDataArr: IHistoryNoteProps[] = [
    mockDataObjFirst,
    mockDataObjSecond,
  ];
  const url = useAppSelector((state) => state.persistedReducer.historyItems);
  const shortLink = useAppSelector((state) => state.persistedReducer.shortUrl);
  const copyToClipboard = (shortUrl: string): void => {
    navigator.clipboard.writeText(shortUrl);
    console.log("text is copied" + shortUrl);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };
  return (
    <>
      <Container>
        <Header>History</Header>
        <Table>
          <TableRow>
            <TableData>Favourite</TableData>
            <TableData>Latest</TableData>
            <TableData>Expire</TableData>
            <TableData isLink>Links</TableData>
            <TableData>Total clicks</TableData>
            <TableData></TableData>
            <TableData></TableData>
            <TableData></TableData>
            <TableData></TableData>
          </TableRow>
          {url.map((urlElement) => {
            return (
              <TableRow>
                <TableData>
                  <FavouriteIcon
                    favourite={urlElement.favourite}
                    src={favouriteIcon}
                  />
                  {/* {typeof elementFeature == "boolean" &&
                      (!elementFeature
                        ? "it is not favourite"
                        : "it is favourite")}
                    {typeof elementFeature === "Date" &&
                      elementFeature.toLocaleString()} */}
                </TableData>
                <TableData style={{ color: "white" }}>
                  {urlElement.creationDate as React.ReactNode}
                </TableData>
                <TableData isExpire>
                  {urlElement.expiryDate as React.ReactNode}
                </TableData>
                <TableData isLink>
                  {urlElement.shortUrl} {urlElement.longUrl}
                </TableData>
                <TableData style={{ color: "white" }}>
                  {urlElement.clicks}
                </TableData>
                <TableData>
                  <TableIcon src={pencilIcon} />
                </TableData>
                <TableData>
                  <TableIcon src={qrIcon} />
                </TableData>
                <TableData>
                  <TableIcon
                    src={copyIcon}
                    onClick={() => {
                      copyToClipboard(shortLink);
                    }}
                  />
                </TableData>
                <TableData>
                  <TableIcon src={deleteIcon} />
                </TableData>
              </TableRow>
            );
          })}
        </Table>
      </Container>
      {isCopied && (
        <TextIsCopiedContainer>
          <TextIsCopiedParagraph>
            The link is copied to your clipboard
          </TextIsCopiedParagraph>
        </TextIsCopiedContainer>
      )}
    </>
  );
};

export default History;
