import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userdata: localStorage.getItem("userdata") ? JSON.parse(localStorage.getItem("userdata")) : {},
  user_image: localStorage.getItem("user_image") ? JSON.parse(localStorage.getItem("user_image")) : null,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : {},
  bookdata: localStorage.getItem("bookdata") ? JSON.parse(localStorage.getItem("bookdata")) : [],
  specificdata: localStorage.getItem("specificdata") ? JSON.parse(localStorage.getItem("specificdata")) : [],
}
const profileSlice = createSlice({
  name:"profile",
  initialState:initialState,
  reducers:{
    setuserdata(state,action){
      state.userdata = action.payload;
      localStorage.setItem("userdata",JSON.stringify(action.payload));
    },
    setuser_image(state,action){
      state.user_image = action.payload;
      localStorage.setItem("user_image",JSON.stringify(action.payload));
    } ,
    settoken(state,action){
      state.token = action.payload;
      localStorage.setItem("token",JSON.stringify(action.payload));
    },
    setbookdata(state,action){
      state.bookdata = action.payload;
      localStorage.setItem("bookdata",JSON.stringify(action.payload));
    },
    setspecificdata(state,action){
      state.specificdata = action.payload;
      localStorage.setItem("specificdata",JSON.stringify(action.payload));
    }

  }

})
export const {setuserdata,setuser_image,setspecificdata, settoken,setbookdata} = profileSlice.actions;
export default profileSlice.reducer;