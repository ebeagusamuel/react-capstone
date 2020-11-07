import { configureStore } from '@reduxjs/toolkit';
import highlightsReducer from './feature/soccerHighlights/highlightsSlice';

export default configureStore({
  reducer: {
    highlights: highlightsReducer,
  },
});
