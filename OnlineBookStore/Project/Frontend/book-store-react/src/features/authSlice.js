import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    //name of Slice (must be unique)
    name : 'auth',
    initialState : {
        token : null,
    },
    reducers: {
        // action : action handler
        login : (state,action) => {
            state.token = action.payload.token
        },
        //action : action handler
        logout : (state) => {
            state.token = null
        }
    }
})

export const { login, logout} = authSlice.actions

export default authSlice.reducer