import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";

export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
});














































//think o global store as a whole cake where reducer allows us to get a speciic slice of that cake so we can reduce the entire state and only grab what we need -----concat(--we have to pass something which make reducer to do its work--)-----
// we are coniguring a store -- a store is a global state that saves the entire inormation of our application but in most cases we dont need the entire state  you only need to reduce it to a specific slice of a pie-- in this case its going to be articleApi--meaning we just want to get something from this API to be be able to make it work we added it as a reducer and we add it right here in the middle ware -- by saying articleApi.middleware