import React from 'react';
import { useSelector } from 'react-redux';
import Highlight from './Highlight';

const HighlightsContainer = () => {
  const D = useSelector(state => state.highlights.league);
  let highlights = [...useSelector(state => state.highlights.highlights)];

  if (D) {
    highlights = highlights.filter(highlight => {
      const option1 = D.split(' ').slice(0, 2).join(' ');
      const option2 = highlight.competition.name.split(' ').slice(0, 2).join(' ');
      return option2.includes(option1);
    });
  }

  const highlghtItems = highlights.map(highlight => (
    <Highlight key={highlight.id} highlight={highlight} />
  ));

  return <div className="py-3 d-flex flex-wrap justify-content-center">{highlghtItems}</div>;
};

export default HighlightsContainer;
