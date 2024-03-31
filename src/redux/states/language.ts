import { LocalStorageTypes, Language } from '@/models';
import { getLocalStorage, setLocalStorage } from '@/utilities';
import { createSlice} from '@reduxjs/toolkit'

const initialState: Language[] =[];
 
export const languageSlice = createSlice({
    name: `language`,
    initialState: getLocalStorage(LocalStorageTypes.LANGUAGE) ? JSON.parse(getLocalStorage(LocalStorageTypes.LANGUAGE) as string): initialState,
    reducers:{
        addLanguage: ( state,action) =>{
            setLocalStorage(LocalStorageTypes.LANGUAGE, state);
            return action.payload;
        }
    }
})
export const {
    addLanguage
}= languageSlice.actions;