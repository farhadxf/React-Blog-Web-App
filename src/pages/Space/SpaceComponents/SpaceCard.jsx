import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SpaceCard = ({ title, image, slug }) => {
  return (
    <Link to={slug}>
      <div className='space-card'>
        <img src={image} />
        <h2>{title}</h2>
      </div>
    </Link>
  );
};

SpaceCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default SpaceCard;
