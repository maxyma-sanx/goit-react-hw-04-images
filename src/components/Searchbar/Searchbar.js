import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { settings } from 'utils/notifySettings';

import {
  SearchbarContainer,
  SearchBtn,
  SearchForm,
  SearchInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChangeQuery = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    if (!query.trim()) {
      toast.error('Please enter a non empty query!', settings);
      return;
    }

    onSubmit(query);
  };

  return (
    <SearchbarContainer>
      <SearchForm onSubmit={handleFormSubmit}>
        <SearchBtn type="submit">
          <FaSearch size="18" />
        </SearchBtn>
        <SearchInput
          type="text"
          name="query"
          placeholder="Search images and photos"
          autocomplete="off"
          value={query}
          onChange={handleChangeQuery}
          autoFocus
        />
      </SearchForm>
    </SearchbarContainer>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
