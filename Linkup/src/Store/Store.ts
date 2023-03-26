import { configureStore } from '@reduxjs/toolkit';
import AnimeLetterFilterSlice from './Slices/AnimeLetterFilterSlice';
import WindowStateSlice from './Slices/SettingsWindowSlice';
import GenreFilterSlice from './Slices/AnimeGenreFilterSlice';
import AnimeNameSlice from './Slices/CurrentAnimeSlice';

export const store = configureStore({
	reducer: {
		AnimeLetterFilter: AnimeLetterFilterSlice,
		AnimeGenreFilter: GenreFilterSlice,
		CurrentAnime: AnimeNameSlice,
		SettingsWindowState: WindowStateSlice,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
