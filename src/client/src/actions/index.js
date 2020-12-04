import {createAction } from 'redux-act';

// Notification
export const setNotification = createAction('SET_NOTIFICATION');
export const resetNotification = createAction('RESET_NOTIFICATION');

// ROMs
export const requestAllROMs = createAction('REQUEST_ALL_ROMS');
export const setAllROMs = createAction('SET_ALL_ROMS');
export const setRequestFailed = createAction('SET_REQUEST_FAILED');