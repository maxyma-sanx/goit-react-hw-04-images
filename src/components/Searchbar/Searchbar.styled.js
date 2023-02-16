import styled from 'styled-components';

export const SearchbarContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 64px;
  padding: 12px 24px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accent};
  box-shadow: ${({ theme }) => theme.shadows.default};
  z-index: 100;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 600px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  overflow: hidden;
`;

export const SearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;

  border: 0;
  opacity: 0.6;
  cursor: pointer;
  outline: none;

  transition: opacity ${({ theme }) => theme.transitions.default};

  :hover {
    opacity: 1;
  }
`;

export const SearchInput = styled.input`
  display: inline-block;

  padding: 4px 12px;
  margin-bottom: 4px;

  width: 100%;

  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
