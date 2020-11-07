import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  highlights: [],
  status: 'idle',
  error: null,
  league: '',
};

export const fetchHighlights = createAsyncThunk('highlights/fetchHighlights', async () => {
  
  const response = await fetch(
    'https://www.scorebat.com/video-api/v1/',
    { mode: 'cors' },
  );
  const data = await response.json();
  const modifiedData = data.filter(highlight => {
    const date1 = new Date(highlight.date);
    const date2 = new Date(new Date().setDate(new Date().getDate() - 1));
    return date2 > date1
  })
  console.log(modifiedData);
});

const highlightsSlice = createSlice({
  name: 'highlights',
  initialState,
  reducers: {
    setLeague: (state, action) => {
      state.league = action.payload;
    },
  },
  extraReducers: {
    [fetchHighlights.pending]: state => {
      state.status = 'loading';
    },
    [fetchHighlights.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.news = action.payload;
    },
    [fetchHighlights.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.error;
    },
  },
});

export const { setCountry } = highlightsSlice.actions;
export default highlightsSlice.reducer;