import { createSlice } from "@reduxjs/toolkit";

export const Videoslice = createSlice({
    name: "video", 
    initialState: {
        videoName : ""
    },
    reducers: {
        videoSubmit(state: { videoName : string }, action: { payload: string }) {
            const videoName = action.payload;
            state.videoName = videoName
        }
    }
})

export const video_action = Videoslice.actions