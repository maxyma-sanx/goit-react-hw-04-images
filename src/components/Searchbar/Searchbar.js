import { Component } from 'react';
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

export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  handleChangeQuery = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleFormSubmit = e => {
    const { query } = this.state;

    e.preventDefault();

    if (!query.trim()) {
      toast.error('Please enter a non empty query!', settings);
      return;
    }

    this.props.onSubmit(query);
  };

  render() {
    const { query } = this.state;

    return (
      <SearchbarContainer>
        <SearchForm onSubmit={this.handleFormSubmit}>
          <SearchBtn type="submit">
            <FaSearch size="18" />
          </SearchBtn>
          <SearchInput
            type="text"
            name="query"
            placeholder="Search images and photos"
            autocomplete="off"
            value={query}
            onChange={this.handleChangeQuery}
            autoFocus
          />
        </SearchForm>
      </SearchbarContainer>
    );
  }
}
