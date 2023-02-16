import styled from 'styled-components';

export const GalleryImage = styled.img`
  width: 100%;
  height: 260px;

  object-fit: cover;

  transition: transform ${({ theme }) => theme.transitions.default};

  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
