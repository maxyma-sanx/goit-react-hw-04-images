import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  display: block;

  padding: 8px 16px;
  margin: 0 auto;

  min-width: 180px;

  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  text-decoration: none;
  color: #fff;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.accent};
  border: 0;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.button};

  transition: all ${({ theme }) => theme.transitions.default};

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.accentHover};
  }
`;
