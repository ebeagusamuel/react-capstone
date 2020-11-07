import React from 'react';
import { useSelector } from 'react-redux';
import Highlight from './Highlight';

const HighlightsContainer = () => {
  // const D = useSelector(state => state.Highlights.country);
  const highlights = useSelector(state => state.highlights.highlights);
  const highlghtItems = highlights.map(highlight => <Highlight key={highlight.id} highlight={highlight} />);

  return (
    <div className="py-3 d-flex flex-wrap justify-content-center">
      {highlghtItems}
    </div>
  );
};

export default HighlightsContainer;