import styled from "styled-components";
import { Formik, Form, Field } from "formik";

export const FormikStyled = styled(Formik)``;

export const FormStyled = styled(Form)`
  width: 45%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    123.62deg,
    rgba(255, 255, 255, 0.18) 17.55%,
    rgba(255, 255, 255, 0.06) 96.04%
  );
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 73px;
`;

export const InputsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 2em;
`;

export const LoginFormikField = styled(Field)`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0);
  border: solid 1px #ffc61e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 1rem;
  padding: 4% 4%;
  color: rgba(0, 0, 0, 0.5);

  &::placeholder {
    display: flex;
    justify-content: flex-start;
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 36px;
    padding-left: 2%;
    color: rgba(0, 0, 0, 0.5);
    font-size: 1rem;
  }
  &:focus {
    outline: none;
  }
`;

export const LoginFormikButton = styled.button`
  width: 25%;
  border-radius: 50px;
  transform: scale(1.3);
  background: #ffc61e;
  color: rgba(0, 0, 0, 0.5);
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 100%;
  line-height: 36px;
  border: none;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
