import React, { FC } from "react";
import { useField, Form, FormikProps, Formik } from "formik";
import ShrinkForm from "./ShrinkForm";

const MainPage = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        ad dicta! Repellat unde cupiditate doloribus, a expedita modi natus id
        illum atque accusamus consequatur maxime ab, molestias culpa ut aliquid.
      </p>
      <ShrinkForm />
    </div>
  );
};

export default MainPage;
