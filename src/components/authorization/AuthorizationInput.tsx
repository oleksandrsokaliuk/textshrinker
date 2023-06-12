// import React, { FC } from "react";
// import "../styles/button.css";
// import { useField, Form, FormikProps, Formik } from "formik";

// interface Values {
//   firstName: string;
//   lastName: string;
//   email: string;
// }

// interface IAuthorizationInputProps {
//   name: string;
//   type: string;
//   label: string;
// }

// const AuthorizationInput = ({ label, ...props }) => {
//   const [field, meta, helpers] = useField(props);
//   return (
//     <>
//       <label>
//         {label}
//         <input {...field} {...props} />
//       </label>
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </>
//   );
// };

// export default AuthorizationInput;


import * as React from 'react';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';

interface MyFormValues {
  firstName: string;
}

export const AuthorizationInput: React.FC<{}> = () => {
  const initialValues: MyFormValues = { firstName: '' };
  return (
    <div>
      <h1>My Example</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="First Name" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};