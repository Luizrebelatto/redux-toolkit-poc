import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { EpisodeResponse } from "./types/episodes.type";

export const api = createApi({
    reducerPath: "rickAndMortyApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://rickandmortyapi.com/api/"
    }),

    endpoints: builder => ({
        getEpisodes: builder.query<EpisodeResponse , void>({
            query: () => "episode"
        })
    })
});

export const {
    useGetEpisodesQuery,
    useLazyGetEpisodesQuery
} = api;