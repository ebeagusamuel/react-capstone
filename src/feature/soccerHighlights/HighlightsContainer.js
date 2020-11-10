import React from 'react';
import { useSelector } from 'react-redux';
import { CommonLoading } from 'react-loadingg';
import Highlight from './Highlight';

const HighlightsContainer = () => {
  const status = useSelector(state => state.highlights.status);
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

  if (status === 'loading') {
    return <CommonLoading />;
  }

  if (status === 'rejected') {
    return <h2 className="mt-5 px-5 text-center">There was an error fetching data from the API, please refresh the page again</h2>;
  }

  return <div className="py-3 mx-auto d-flex flex-wrap justify-content-center">{highlghtItems}</div>;
};

export default HighlightsContainer;
