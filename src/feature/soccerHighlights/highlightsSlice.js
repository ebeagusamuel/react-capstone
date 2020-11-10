import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  highlights: [],
  status: 'idle',
  error: null,
  league: '',
};

export const fetchHighlights = createAsyncThunk('highlights/fetchHighlights', async () => {
  const response = await fetch('https://www.scorebat.com/video-api/v1/', { mode: 'cors' });
  const data = await response.json();
  const modifiedData = data.filter(highlight => {
    const date1 = new Date(highlight.date);
    const date2 = new Date(new Date().setDate(new Date().getDate() - 1));
    return date2 > date1;
  }).map((highlight, index) => {
    const x = highlight;
    x.id = index + 1;
    return x;
  });
  return modifiedData;
});

const highlightsSlice = createSlice({
  name: 'highlights',
  initialState,
  reducers: {
    setLeague: (state, action) => {
      const newState = state;
      newState.league = action.payload;
      return newState;
    },
  },
  extraReducers: {
    [fetchHighlights.pending]: state => {
      const newState = state;
      newState.status = 'loading';
      return newState;
    },
    [fetchHighlights.fulfilled]: (state, action) => {
      const newState = state;
      newState.status = 'fulfilled';
      newState.highlights = action.payload;
      return newState;
    },
    [fetchHighlights.rejected]: (state, action) => {
      const newState = state;
      newState.status = 'rejected';
      newState.error = action.error;
      return newState;
    },
  },
});

export const { setLeague } = highlightsSlice.actions;
export default highlightsSlice.reducer;
