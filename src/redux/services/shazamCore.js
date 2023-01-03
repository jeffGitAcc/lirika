import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'apiShazamCore',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'b6534849fcmshc102cb8939e44a0p1f7fbajsne8737d8cae4d');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
    getSongsByGenre: builder.query({ query: (genre) => `charts/genre-world?genre_code=${genre}` }),
    getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
    getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
  }),
});

export const shazamCoreApiTwo = createApi({
  reducerPath: 'apiShazamCoreTwo',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v2',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'b6534849fcmshc102cb8939e44a0p1f7fbajsne8737d8cae4d');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getArtistDetails: builder.query({ query: ({ artistId }) => `/artists/details?artist_id=${artistId}` }),

  }),
});

export const {useGetSongsBySearchQuery, useGetSongsByGenreQuery, useGetTopChartsQuery, useGetSongDetailsQuery, useGetSongRelatedQuery, useGetSongsByCountryQuery } = shazamCoreApi;
export const { useGetArtistDetailsQuery } = shazamCoreApiTwo;
