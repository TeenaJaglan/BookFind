import './dialogbox.css';
import {logout} from "../api/profileupdation.jsx";
import { useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
const Dialogbox = function({logoutbox,setlogoutbox}){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
  <div className ="alls">
    <dialog className="dialogbox">
    <p className="para">Are you sure you want to logout ?</p>
    <div className = "btngrp">
      <button className="btn1" onClick = {()=>(logout(dispatch,navigate))}>LogOut</button>
      <button className ="btn2" onClick = {()=>(setlogoutbox(false))}>Cancel</button>
    </div>
  </dialog>
  </div>);
}
export default Dialogbox ;