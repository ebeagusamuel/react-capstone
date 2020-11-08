import configureStore from 'redux-mock-store';
import { setLeague } from '../feature/soccerHighlights/highlightsSlice'

const mockStore = configureStore();
const store = mockStore();

describe('setLeague action', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches the correct action and payload', () => {
    const expectedActions = [
      {type: "highlights/setLeague", payload: "CHAMPIONS LEAGUE"},
    ];

    store.dispatch(setLeague('CHAMPIONS LEAGUE'));
    expect(store.getActions()).toEqual(expectedActions);
  })
})