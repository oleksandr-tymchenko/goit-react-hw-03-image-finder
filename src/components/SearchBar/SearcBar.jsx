import { Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
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
    actions.setSubmitting(false);
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <SearchbarWrap>
          <SearchForm>
            <SearchFormBtn type="submit" disabled={isSubmitting}>
              <SearchFormBtnLabel>Search</SearchFormBtnLabel>
            </SearchFormBtn>
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
SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
