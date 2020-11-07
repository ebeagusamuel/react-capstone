import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Highlight = ({ highlight }) => {
  const {
    thumbnail, title, date, id,
  } = highlight;
  return (
    <div className="card m-1" style={{ width: '18rem' }}>
      <img className="card-img-top" src={`${thumbnail}`} alt={title} />
      <div className="card-body">
        <h5 className="card-title">
          {title}
        </h5>
        <p className="card-text">{date}</p>
        <Link to={`/highlights/${id}`} className="btn btn-primary">
          Watch highlight
        </Link>
      </div>
    </div>
  );
};

Highlight.propTypes = {
  highlight: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default Highlight;
