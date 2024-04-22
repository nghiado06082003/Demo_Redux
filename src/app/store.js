import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../api/apiSlice'

import finlogsReducer from '../features/finlogs/finlogsSlice'

import postsReducer from '../features/posts/postsSlice'

export default configureStore({
  reducer: {
    finlogs: finlogsReducer,
    posts: postsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})