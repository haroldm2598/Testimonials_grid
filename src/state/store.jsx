import { configureStore } from '@reduxjs/toolkit';
import gridReducer from './grid/gridSlicer';

export const store = configureStore({
	reducer: {
		gridTemplate: gridReducer
	}
});
