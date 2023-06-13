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
  FormikForm,
} from "../../styles/mainPage/ShrinkForm.styled";
import { useSelector, useDispatch } from "react-redux";
import { fetchShortUrlByLong } from "../../redux/reducers/shrinkerSlice";
import { AppDispatch } from "../../redux/reducers/store";

interface MyFormValues {
  url: string;
}

export const ShrinkForm: React.FC<{}> = () => {
  const fetchShrinkApi = async (value: string) => {
    try {
      const originalPromiseResult = await dispatch(
        fetchShortUrlByLong(value)
      ).unwrap();
    } catch (e) {
      console.error(e);
    }
  };
  const dispatch = useDispatch<AppDispatch>();
  const initialValues: MyFormValues = { url: "" };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: MyFormValues, actions) => {
          console.log({ values, actions });
          fetchShrinkApi(values.url);
          actions.setSubmitting(false);
        }}
      >
        <FormikForm>
          <FormikField name="url" placeholder="Long URL..." />
          <FormikButton type="submit">Shrink</FormikButton>
        </FormikForm>
      </Formik>
    </>
  );
};

export default ShrinkForm;
