import { setuser_image, setuserdata } from "../slice/profileSlice";
import {imageurl} from "../../../public/searchmethods.jsx";
import {apiconnector } from "./apiconnector.jsx";
import { setloading } from "../slice/searchSlice";

const signupUpdation = async function(data,dispatch,navigate){
  dispatch(setloading(true));
  const url = `https://api.dicebear.com/5.x/initials/svg?seed=teena`;
  dispatch(setuserdata(data));
  dispatch(setuser_image(url));
  dispatch(setloading(false));
  navigate("/");
}
export const logout = async function(dispatch,navigate){
  dispatch(setloading(true));
  dispatch(setuserdata({}));
  dispatch(setuser_image(null));
  dispatch(setloading(false));

  navigate("/");
}

export default signupUpdation ;