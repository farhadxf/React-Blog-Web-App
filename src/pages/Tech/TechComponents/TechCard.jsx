import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Using destructuring in the function signature allows direct access to specific props passed to the component
function TechCard({ title, image, slug }) {
  //functional component which takes 3 props
  return (
    <Link to={slug}>
      <div className='tech-card'>
        <img src={image} />
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

//propTypes validation to make sure it's expected data types were being passed
TechCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default TechCard;

/* or by using prop to achive exact same setup

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function TechCard(props) {
  return (
    <Link to={props.slug}>
      <div className='tech-card'>
        <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
      </div>
    </Link>
  );
}

TechCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default TechCard;
*/
