export interface Search {
  albums: Albums;
  artists: Artists;
  tracks: Tracks;
  playlists: Playlists;
  shows: Shows;
  episodes: Episodes;
  audiobooks: Audiobooks;
}

export interface Albums {
  href: string;
  items: Item[];
  limit: number;
  next: string;
  offset: number;
  previous: any;
  total: number;
}

export interface Item {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface Artists {
  href: string;
  items: Item2[];
  limit: number;
  next: string;
  offset: number;
  previous: any;
  total: number;
}

export interface Item2 {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image2[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface Followers {
  href: any;
  total: number;
}

export interface Image2 {
  height: number;
  url: string;
  width: number;
}

export interface Tracks {
  href: string;
  items: Item3[];
  limit: number;
  next: string;
  offset: number;
  previous: any;
  total: number;
}

export interface Item3 {
  album: Album;
  artists: Artist3[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url?: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface Album {
  album_type: string;
  artists: Artist2[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image3[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface Artist2 {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface Image3 {
  height: number;
  url: string;
  width: number;
}

export interface Artist3 {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ExternalIds {
  isrc: string;
}

export interface Playlists {
  href: string;
  items: Item4[];
  limit: number;
  next: string;
  offset: number;
  previous: any;
  total: number;
}

export interface Item4 {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image4[];
  name: string;
  owner: Owner;
  primary_color: any;
  public: any;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
}

export interface Image4 {
  height?: number;
  url: string;
  width?: number;
}

export interface Owner {
  display_name: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Shows {
  href: string;
  items: Item5[];
  limit: number;
  next: any;
  offset: number;
  previous: any;
  total: number;
}

export interface Item5 {
  available_markets: string[];
  copyrights: any[];
  description: string;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  html_description: string;
  id: string;
  images: Image5[];
  is_externally_hosted: boolean;
  languages: string[];
  media_type: string;
  name: string;
  publisher: string;
  total_episodes: number;
  type: string;
  uri: string;
}

export interface Image5 {
  height: number;
  url: string;
  width: number;
}

export interface Episodes {
  href: string;
  items: Item6[];
  limit: number;
  next: string;
  offset: number;
  previous: any;
  total: number;
}

export interface Item6 {
  audio_preview_url?: string;
  description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  html_description: string;
  id: string;
  images: Image6[];
  is_externally_hosted: boolean;
  is_playable: boolean;
  language: string;
  languages: string[];
  name: string;
  release_date: string;
  release_date_precision: string;
  resume_point: ResumePoint;
  type: string;
  uri: string;
}

export interface Image6 {
  height: number;
  url: string;
  width: number;
}

export interface ResumePoint {
  fully_played: boolean;
  resume_position_ms: number;
}

export interface Audiobooks {
  href: string;
  items: any[];
  limit: number;
  next: any;
  offset: number;
  previous: any;
  total: number;
}
