import { createSlice } from "@reduxjs/toolkit";
import { IVideo } from "../types/Interface";

export const Videoslice = createSlice({
  name: "video",
  initialState: {
    videoName: "",
    video: {
      id: {
        videoId: ""
      },
      snippet: {
        title: "",
        thumbnails: {
          high: {
            url: "",
          },
        },
        channelTitle: "",
        description: "",
      }
    }
  },
  reducers: {
    videoSubmit(state: { videoName: string }, action: { payload: string }) {
      const videoName = action.payload;
      state.videoName = videoName
    },
    setVideo(state: { video: IVideo }, action: { payload: IVideo }) {
      const video = action.payload;
      state.video.id.videoId = video.id.videoId
      state.video.snippet.title = video.snippet.title
      state.video.snippet.description = video.snippet.description
      state.video.snippet.channelTitle = video.snippet.channelTitle
    }
  }
})

export const video_action = Videoslice.actions