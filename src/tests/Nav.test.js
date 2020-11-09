import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Nav from '../feature/soccerHighlights/Nav';
import store from '../store';

describe('The Nav component', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Nav />
    </Provider>,
  );

  test('contains the text "SoccerHighlights', () => {
    expect(screen.getByText('SoccerHighlights')).toBeInTheDocument();
  });
});
