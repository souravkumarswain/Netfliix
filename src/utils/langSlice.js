import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name:'langData',
    initialState:{
        curLang : 'enUS'
    },
    reducers:{
        addLangChange : (state,action) => {
            state.curLang = action.payload
        }
    }
})

export default langSlice.reducer;
export const {addLangChange} = langSlice.actions;