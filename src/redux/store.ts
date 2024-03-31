 import { Language} from "@/models";
 import { configureStore } from '@reduxjs/toolkit'
import { favoritesSlice, languageSlice } from "./states";

export interface AppStore {
    language:  Language[];
    favorites:  Language[];

}
export default configureStore <AppStore>({
    reducer: {
        language: languageSlice.reducer,
        favorites: favoritesSlice.reducer
    }
});


