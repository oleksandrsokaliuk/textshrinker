import styled, { keyframes } from "styled-components";
import history from "./../../assets/history.svg";
import theme from "./../../assets/theme.svg";
import authorization from "./../../assets/authorization.svg";
import { Link } from "react-router-dom";

export const MenuWrapper = styled.menu`
  position: absolute;
  top: 5%;
  display: flex;
  width: 40%;
  justify-content: flex-end;
  gap: 10%;
`;

export const MenuIcon = styled.img`
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`;
