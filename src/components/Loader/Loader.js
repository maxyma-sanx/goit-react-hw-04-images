import PropTypes from 'prop-types';
import { SyncLoader } from 'react-spinners';

export const Loader = ({ loading }) => {
  return (
    <SyncLoader
      color="#36d7b7"
      size={20}
      loading={loading}
      cssOverride={{
        display: 'flex',
        justifyContent: 'center',
        padding: '0 0 20px',
      }}
    />
  );
};

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};
