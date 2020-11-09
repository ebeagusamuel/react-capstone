import highlightsReducer from '../feature/soccerHighlights/highlightsSlice';

describe('higlightsReducer', () => {
  test('has correct initial state', () => {
    const action = { type: 'dummy_action' };
    const initialState = [];

    expect(highlightsReducer(initialState, action)).toEqual(initialState);
  });

  test('updates the state accordingly', () => {
    const action = { type: 'highlights/setLeague', payload: 'CHAMPIONS LEAGUE' };
    const expectedState = {
      error: null, highlights: [], league: 'CHAMPIONS LEAGUE', status: 'idle',
    };

    expect(highlightsReducer(undefined, action)).toEqual(expectedState);
  });
});
