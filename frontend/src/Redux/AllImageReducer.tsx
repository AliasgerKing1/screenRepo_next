import {createSlice} from "@reduxjs/toolkit"

let initialState : any = []

let userReducer = createSlice({
    name : "allimages",
    initialState,
    reducers : {
        getAllImages(state,action) {
            return action.payload
        },
    }
})

export default userReducer.reducer
export const {getAllImages} = userReducer.actions