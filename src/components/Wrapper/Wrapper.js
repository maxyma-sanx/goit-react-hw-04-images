import PropTypes from 'prop-types';
import { Container } from './Wrapper.styled';

export const Wrapper = ({ children }) => {
  return <Container>{children}</Container>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
