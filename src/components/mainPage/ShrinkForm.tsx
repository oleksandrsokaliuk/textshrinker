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
import {
  deleteHistoryItem,
  fetchShortUrlByLong,
  getHistoryItem,
  useAppSelector,
} from "../../redux/reducers/shrinkerSlice";
import { AppDispatch } from "../../redux/reducers/store";
import { IHistoryNoteProps } from "../history/HistoryNote";

interface MyFormValues {
  url: string;
  extension: string;
}

export const ShrinkForm: React.FC<{}> = () => {
  const [linkToCompare, setLinkToCompare] = React.useState<string>("");
  const fetchShrinkApi = async (value: MyFormValues) => {
    try {
      const originalPromiseResult = await dispatch(
        fetchShortUrlByLong(value.url)
      ).unwrap();
    } catch (e) {
      console.error(e);
    }
  };
  const url = useAppSelector((state) => state.persistedReducer.historyItems);
  const longUrl = useAppSelector((state) => state.persistedReducer.longUrl);
  const shortUrl = useAppSelector((state) => state.persistedReducer.shortUrl);
  const dispatch = useDispatch<AppDispatch>();
  // const deleteItem = () => {
  //   dispatch(deleteHistoryItem());
  // };
  const initialValues: MyFormValues = { url: "", extension: "" };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: MyFormValues, actions) => {
          console.log({ values, actions });
          fetchShrinkApi(values);
          const historyElement: IHistoryNoteProps = {
            favourite: false,
            creationDate: new Date(Date.now()).toLocaleDateString(),
            expiryDate: new Date(Date.now() + 604800).toLocaleDateString(),
            longUrl: longUrl,
            shortUrl: shortUrl,
            clicks: 0,
          };
          dispatch(getHistoryItem(historyElement));
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
