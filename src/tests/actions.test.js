import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setLeague, fetchHighlights } from '../feature/soccerHighlights/highlightsSlice';

const mockStore = configureStore([thunk]);
const store = mockStore();

beforeEach(() => {
  store.clearActions();
});

describe('setLeague action', () => {
  it('dispatches the correct action and payload', () => {
    const expectedActions = [
      { type: 'highlights/setLeague', payload: 'CHAMPIONS LEAGUE' },
    ];

    store.dispatch(setLeague('CHAMPIONS LEAGUE'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('fetchHighlights', () => {
  it('it dispatches the correct action depending on the status of the request', async () => {
    const { payload } = await store.dispatch(fetchHighlights());
    const actions = store.getActions();

    expect(actions[0].type).toBe(fetchHighlights.pending.type);
    expect(actions[1].type).toBe(fetchHighlights.fulfilled.type);
  });
});
