export interface IVideo {
  id: {
    videoId: string
  };
  snippet: {
    title: string;
    thumbnails: {
      high: {
        url: string;
      },
      default: {
        url: string;
      },
      medium: {
        url: string;
      }
    };
    channelTitle: string;
    description: string;
  };
}

export interface IAppState {
  video: {
    videoName: string;
    video: IVideo;
  };
}