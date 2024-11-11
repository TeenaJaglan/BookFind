import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  key: localStorage.getItem("key") ? JSON.parse(localStorage.getItem("key")) : "title",
  value: localStorage.getItem("value") ? JSON.parse(localStorage.getItem("value")) : "we",
  loading: localStorage.getItem("loading") ? JSON.parse(localStorage.getItem("loading")) : false,
};
const searchSlice = createSlice({
  name:"search",
  initialState:initialState,
  reducers:{
    setkey(state,action){
      state.key = action.payload;
      console.log(state.key,action.payload,"slice key");
     localStorage.setItem("key",JSON.stringify(state.key));
     console.log(localStorage.getItem("key"));
    },
    setloading(state,action){
      state.loading = action.payload;
      console.log(state.key,action.payload,"slice value");

      localStorage.setItem("loading",JSON.stringify(state.loading));
    },
    setvalue(state,action){
      state.value = action.payload;
      console.log(state.key,action.payload,"slice load");
     localStorage.setItem("value",JSON.stringify(state.value));
    }

  }

})
export const {setkey, setloading,setvalue} = searchSlice.actions;
export default searchSlice.reducer;