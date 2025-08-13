import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice.js"
import productReducer from "./productSlice.js"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web
import { combineReducers } from "@reduxjs/toolkit"


const persistConfig ={
    key : "root",
    version : 1,
    storage,
}

const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer
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