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
  FormikFieldContainer,
  FormikFieldExtension,
  FormikForm,
} from "../../styles/mainPage/ShrinkForm.styled";
import { useSelector, useDispatch } from "react-redux";
import { fetchShortUrlByLong } from "../../redux/reducers/shrinkerSlice";
import { AppDispatch } from "../../redux/reducers/store";

interface MyFormValues {
  url: string;
  extension: string;
}

export const ShrinkForm: React.FC<{}> = () => {
  const fetchShrinkApi = async (value: MyFormValues) => {
    try {
      const originalPromiseResult = await dispatch(
        fetchShortUrlByLong(value.url)
      ).unwrap();
    } catch (e) {
      console.error(e);
    }
  };
  const dispatch = useDispatch<AppDispatch>();
  const initialValues: MyFormValues = { url: "", extension: "" };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: MyFormValues, actions) => {
          console.log({ values, actions });
          fetchShrinkApi(values.url);
        }}
      >
        <FormikForm>
          <FormikFieldContainer>
            <FormikField name="url" placeholder="Long URL..." />
            <FormikFieldExtension
              name="extension"
              placeholder="Customize extension"
            />
          </FormikFieldContainer>
          <FormikButton type="submit">Shrink</FormikButton>
        </FormikForm>
      </Formik>
    </>
  );
};

export default ShrinkForm;
