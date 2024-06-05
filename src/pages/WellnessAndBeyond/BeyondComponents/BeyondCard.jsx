import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BeyondCard = ({ title, image, slug }) => {
  return (
    <Link to={slug}>
      <div className='beyond-card'>
        <img src={image} />
        <h2>{title}</h2>
      </div>
    </Link>
  );
};

BeyondCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default BeyondCard;
