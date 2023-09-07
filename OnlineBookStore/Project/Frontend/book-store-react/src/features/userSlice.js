import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: -1,
        firstName : "Account",
        lastName: "",
        email: "",
        mobile: "",
        role: "",
    },
    reducers: {
        setUser : (state,action) => {
            state.id = action.payload.id;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.mobile = action.payload.mobile;
            state.role = action.payload.role;
        },
        clearUser: (state) => {
            state.id = -1;
            state.firstName = "Account";
            state.lastName = "";
            state.email = "";
            state.mobile = "";
            state.role = "";
        }
    }
})

export const { setUser, clearUser} = userSlice.actions

export default userSlice.reducer