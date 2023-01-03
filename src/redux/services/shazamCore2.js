import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApiV2 = createApi({
  reducerPath: 'shazamCoreApi',
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

export const { useGetArtistDetailsQuery } = shazamCoreApiV2;
