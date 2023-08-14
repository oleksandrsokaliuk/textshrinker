import * as React from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import {
  FormikButton,
  FormikField,
} from "../../styles/mainPage/ShrinkForm.styled";
import {
  ButtonContainer,
  FormStyled,
  FormikStyled,
  InputsContainer,
  LoginFormikButton,
  LoginFormikField,
} from "../../styles/authorization/Login.styled";

interface ILoginForm {
  email: string;
  password: string;
  repeatPassword: string;
}

export const LogIn: React.FC<{}> = () => {
  const initialValues: ILoginForm = {
    email: "",
    password: "",
    repeatPassword: "",
  };
  return (
    <>
      <FormikStyled
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
        }}
      >
        <FormStyled>
          <InputsContainer>
            <LoginFormikField id="email" name="email" placeholder="Email" />
            <LoginFormikField
              id="password"
              name="password"
              placeholder="Password"
            />
            <LoginFormikField
              id="repeatPassword"
              name="repeatPassword"
              placeholder="Repeat Password"
            />
            <ButtonContainer>
              <LoginFormikButton type="submit">Log in</LoginFormikButton>
            </ButtonContainer>
          </InputsContainer>
        </FormStyled>
      </FormikStyled>
    </>
  );
};

export default LogIn;
