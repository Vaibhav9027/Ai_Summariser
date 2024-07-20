//this is one specific part of our state of our global store
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;




export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',//--meaning which api do we want to call
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', rapidApiKey);
            headers.set('x-rapidapi-host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        },
    }),
    
    endpoints: (builder) => ({
    getSummary: builder.query({
         // encodeURIComponent() function encodes special characters that may be present in the parameter values
         // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior. Thus that RTK bug
        query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
    }),
    // whenever u pass a user generated we should wrap it with this encodeURIcomponent to avoid errors
}),
 
    
})

export const { useLazyGetSummaryQuery } = articleApi;
//Lazy this allows us to fire thishook on demand not as soon as app loads.--once user enters url and enter submit button