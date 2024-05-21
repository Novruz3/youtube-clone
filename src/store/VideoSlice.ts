import { createSlice } from "@reduxjs/toolkit";
import Url from "../api/Url";

interface videoState {
    videos: any[]
}

export const Videoslice = createSlice({
    name: "video",
    initialState: {
        videos: []
    },
    reducers: {
        videoSubmit(state: { videos: videoState[] }, action: { payload: string }) {
            const videoName = action.payload;
            Url.get("search", {
                params: {
                    part: "snippet",
                    maxResult: 5,
                    key: "AIzaSyB4S2I6cjODUKph05naKm5VG2dy-Ndf5Mg",
                    q: videoName
                }
            })
                .then((res) => {
                    const videos = res.data.items
                    console.log(videos);
                    state.videos.push(...state.videos, videos)
                    // console.log(state.videos);
                })
                .catch((err) => {
                    console.error(err)
                })
        }
    }
})

export const video_action = Videoslice.actions