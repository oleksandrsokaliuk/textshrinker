import * as React from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";

interface MyFormValues {
  url: string;
}

export const ShrinkForm: React.FC<{}> = () => {
  const initialValues: MyFormValues = { url: "" };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="url">Long URL</label>
          <Field id="url" name="url" placeholder="Long URL" />
          <button type="submit">Shrink</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ShrinkForm;
