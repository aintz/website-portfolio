export {};

declare global {
  interface Window {
    YT: any // eslint-disable-line @typescript-eslint/no-explicit-any
    onYouTubeIframeAPIReady: (() => void) | null | undefined
  }
}

declare global {
  namespace YT {
    class Player {
      constructor(element: HTMLElement | string, options: object);
      playVideo: () => void;
      pauseVideo: () => void;
      destroy: () => void;
      // Add other methods you use here
    }
  }
}