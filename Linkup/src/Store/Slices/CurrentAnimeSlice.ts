import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../Store';

// Define a type for the slice state
interface AnimeNameState {
	AnimeName: string | null;
}

// Define the initial state using that type
const initialState: AnimeNameState = {
	AnimeName: null,
};

export const AnimeNameSlice = createSlice({
	name: 'AnimeName',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		SetAnimeName: (state, action: PayloadAction<string>) => {
			console.log('Store Anime Payload:', action.payload);
			state.AnimeName = action.payload;
		},
	},
});

export const { SetAnimeName } = AnimeNameSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const AnimeName = (state: RootState) => state.CurrentAnime;

export default AnimeNameSlice.reducer;
