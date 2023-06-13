import styled from "styled-components";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";

export const FormikField = styled(Field)`
  width: 80%;
  height: 100%;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 2rem;
  padding-left: 2%;
  color: rgba(0, 0, 0, 0.5);
  &::placeholder {
    display: flex;
    justify-content: flex-start;
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 36px;
    background-color: rgba(255, 255, 255, 0.3);
  }
  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.3);
  }
  &:active {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export const FormikButton = styled.button`
  width: 12%;
  border-radius: 50px;
  transform: scale(1.3);
  background: #ffc61e;
  color: #ffffff;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 120%;
  line-height: 36px;
  border: none;
  cursor: pointer;
`;

export const FormikForm = styled(Form)`
  display: flex;
  width: 80%;
  height: 13%;
  justify-content: space-between;
`;
