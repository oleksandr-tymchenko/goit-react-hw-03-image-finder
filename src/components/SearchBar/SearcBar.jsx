import { Formik, Form, Field, ErrorMessage } from 'formik';

import {
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
  SearchbarWrap,
} from './SearchBar.styled';

const initialValue = {
  searchQuery: '',
};

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(Object.values(values)[0]);
    console.log(Object.values(values)[0]);
    actions.setSubmitting(false);
    actions.resetForm();
    // resetForm();
  };
  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <SearchbarWrap>
          <SearchForm>
            <SearchFormBtn type="submit" disabled={isSubmitting}>
              <SearchFormBtnLabel>Search</SearchFormBtnLabel>
            </SearchFormBtn>
            {/* <label htmlFor="searchValue"></label> */}
            <SearchFormInput
              type="text"
              name="searchQuery"
              id="searchQuery"
              autoFocus
              placeholder="Search images and photos"
              autoComplete="off"
            />
            <ErrorMessage name="searchQuery" component="div" />
          </SearchForm>
        </SearchbarWrap>
      )}
    </Formik>
  );
};
