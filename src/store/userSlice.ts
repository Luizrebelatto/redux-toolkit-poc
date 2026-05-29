import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    name: string;
}

const initialState: UserState = {
    name: ""
}

const userSlice = createSlice({
    name: "name",
    initialState,
    reducers: {
        setName(state, action: PayloadAction<string>) {
            state.name = action.payload
        },
        clearName(state){
            state.name = "";
        }
    }
})

export const { setName, clearName } = userSlice.actions;
export default userSlice.reducer;