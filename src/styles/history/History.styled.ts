import { MouseEventHandler } from "react";
import styled from "styled-components";

interface IFavouriteIcon {
  favourite: boolean;
}

interface ITableData {
  isLink?: boolean;
  isExpire?: boolean;
}

export const FavouriteIcon = styled.img<IFavouriteIcon>`
  /* fill: ${(props) =>
    !props.favourite ? "#FFC61E" : "rgba(255,255,255,0.4)"}; */
  fill: white;
  cursor: pointer;
`;

export const TableRow = styled.tr`
  font-size: 1.2em;
  padding: 0px 16px;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #00337f;
`;

export const TableData = styled.td<ITableData>`
  align-self: center;
  justify-self: center;
  overflow: ${(props) => (props.isLink ? "scroll" : "inherit")};
  max-width: ${(props) => (props.isLink ? "20%" : "10%")};
  min-width: ${(props) => (props.isLink ? "20%" : "10%")};
  color: ${(props) => (props.isExpire ? "#AA0000" : "inherit")};
`;

export const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 130%;
`;

interface ITableIconProps extends MouseEventHandler<HTMLImageElement> {
  onClick?: (shortUrl: string) => void;
}

export const TableIcon = styled.img<MouseEventHandler<HTMLImageElement>>`
  cursor: pointer;
  z-index: 10;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`;
