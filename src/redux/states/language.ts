import { LocalStorageTypes, Hotel } from '@/models';
import { getLocalStorage, setLocalStorage } from '@/utilities';
import { createSlice} from '@reduxjs/toolkit'

const initialState: Hotel[] =[];
 
export const hotelSlice = createSlice({
    name: `hotel`,
    initialState: getLocalStorage(LocalStorageTypes.LANGUAGE) ? JSON.parse(getLocalStorage(LocalStorageTypes.LANGUAGE) as string): initialState,
    reducers:{
        addHotel: ( state,action) =>{
            setLocalStorage(LocalStorageTypes.LANGUAGE, state);
            return action.payload;
        }
    }
})
export const {
    addHotel
}= hotelSlice.actions;