import styled from 'styled-components';

export const GalleryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;

  padding: 20px 0;
  margin: 0 auto;

  max-width: calc(100vw - 48px);

  list-style: none;
`;

export const GalleryItem = styled.li`
  border-radius: 2px;
  box-shadow: ${({ theme }) => theme.shadows.gallery};
`;
