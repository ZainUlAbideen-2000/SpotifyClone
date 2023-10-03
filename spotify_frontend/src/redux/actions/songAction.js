// actions/songActions.js

import { setName, setThumbnail, setPlaylistUrl, setUploadedFileName } from '../reducer/songReducer';

export const updateName = (name) => (dispatch) => {
    dispatch(setName(name));
};

export const updateThumbnail = (thumbnail) => (dispatch) => {
    dispatch(setThumbnail(thumbnail));
};

export const updatePlaylistUrl = (url) => (dispatch) => {
    dispatch(setPlaylistUrl(url));
};

export const updateUploadedFileName = (fileName) => (dispatch) => {
    dispatch(setUploadedFileName(fileName));
};
