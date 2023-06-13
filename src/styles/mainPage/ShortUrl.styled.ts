import styled from "styled-components";
import React from "react";

export const ShortUrlContainer = styled.div`
  display: flex;
  width: 80%;
  height: 17%;
  justify-content: space-between;
  align-items: center;
  margin-top: 5%;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  width: 80%;
`;

interface IShortUrlLink {
  href: string;
}

export const ShortUrlLink = styled.a<IShortUrlLink>`
  border: none;
  font-size: 2rem;
  padding-left: 2%;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  margin-right: 2%;
`;

export const TextIsCopiedContainer = styled.div`
  background-color: rgba(255, 198, 30, 0.8);
  position: absolute;
  bottom: 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  width: 25%;
`;

export const TextIsCopiedParagraph = styled.p`
  font-size: 1em;
  color: white;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  text-align: center;
`;
