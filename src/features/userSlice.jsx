import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { DummyData } from '../Data/DummyData';

const initialState = {
	value: DummyData,
};
const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addUser: (state, action) => {
			state.value.push(action.payload);
		},
		removeUser: (state, action) => {
			state.value.pop(action.payload);
		},
		updateUsername: (state, action) => {
			state.value.map(user => {
				if (user.id === action.payload.id) {
					user.nick = action.payload.nick;
				}
			});
		},
	},
});
export const selectedAllUsers = state => state.users.value;
export const { addUser, removeUser, updateUsername } = userSlice.actions;
export const userReducer = userSlice.reducer;
