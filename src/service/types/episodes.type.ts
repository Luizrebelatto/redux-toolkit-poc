export type EpisodeResponse = {
  info: Info;
  results: Episode[];
};

interface Info {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

interface Episode {
    id: string;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}