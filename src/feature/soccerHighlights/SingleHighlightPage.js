import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

const SingleHighlightPage = ({ match }) => {
  const { id } = match.params;
  const highlight = useSelector(state => state.highlights.highlights.find(x => x.id === +id))
    || JSON.parse(localStorage.getItem('highlight'));
  const highlightVideo = highlight.videos.filter(video => video.title === 'Highlights');
  const { embed } = highlightVideo[0];
  const a = parse(embed);

  if (highlight) {
    localStorage.setItem('highlight', JSON.stringify(highlight));
  }

  return (
    <div>
      {a}
    </div>
  );
};

SingleHighlightPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SingleHighlightPage;
