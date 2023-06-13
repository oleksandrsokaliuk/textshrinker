import styled from "styled-components";
import React from "react";

export const ShortUrlContainer = styled.div`
  display: flex;
  width: 80%;
  height: 13%;
  justify-content: space-between;
  align-items: center;
  margin-top: 5%;
`;

interface IShortUrlLink {
  href: string;
}

export const ShortUrlLink = styled.a<IShortUrlLink>`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 2rem;
  padding-left: 2%;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
`;
