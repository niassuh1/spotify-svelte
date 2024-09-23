export interface Track {
  id: string;
  uri: string;
  type: string;
  uid: string;
  linked_from: LinkedFrom;
  media_type: string;
  track_type: string;
  name: string;
  duration_ms: number;
  artists: Artist[];
  album: Album;
  is_playable: boolean;
}

export interface LinkedFrom {
  uri: any;
  id: any;
}

export interface Artist {
  name: string;
  uri: string;
  url: string;
}

export interface Album {
  name: string;
  uri: string;
  images: Image[];
}

export interface Image {
  url: string;
  height: number;
  width: number;
  size: string;
}

export type SpotifyEvents =
  | "ready"
  | "not_ready"
  | "player_state_changed"
  | "autoplay_failed";

export interface SpotifyPlayer {
  new ({
    name,
    getOAuthToken,
    volume,
  }: {
    name: string;
    getOAuthToken: (cb) => void;
    volume: number;
  }): SpotifyPlayerMethods;
}

export interface SpotifyPlayerMethods {
  addListener: (
    event: SpotifyEvents,
    callback: ({ device_id }: { device_id: string }) => void
  ) => void;

  connect: () => Promise<unknown>;
  disconnect: () => Promise<void>;
  removeListener: (event: SpotifyEvents, callback: () => void) => void;
  getCurrentState: () => Promise<void>;
  pause(): () => Promise<void>;
  resume(): () => Promise<void>;
  togglePlay(): () => Promise<void>;
  setName(): (name: string) => Promise<void>;
  getVolume(): () => Promise<number>;
  setVolume(volume: number): () => Promise<void>;
}

declare global {
  interface Window {
    onSpotifyWebPlaybackSDKReady: () => void;
    Spotify: { Player: SpotifyPlayer };
  }
}
