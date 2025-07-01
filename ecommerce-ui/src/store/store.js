import { combineReducers, configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice.js"
import userReducer from "./userSlice.js"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web



const persistConfig ={
    key : "root",
    version : 1,
    storage
}

const rootReducer = combineReducers({
    cart : cartReducer,
    user : userReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),

})

export let persistor = persistStore(store)
export default store