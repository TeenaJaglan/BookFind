import { CiSearch } from "react-icons/ci";
import './navbar.css';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import searchapi from '../api/api.jsx';
import {useDispatch,useSelector} from 'react-redux';
import Dialogbox from "./dialogbox";
import {useState} from 'react';
export default function Navbar(){
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const {key} = useSelector((state=>state.search));
  const {bookdata,user_image} = useSelector((state=>state.profile));
  const dispatch = useDispatch();
  const [logoutbox,setlogoutbox] = useState(false);
const onSub = async (data)=>{
  console.log("the form  search api call starts");
  console.log(data);
  searchapi(data,key,dispatch,bookdata);
}
  return (
    <div className="navbar" >
       <form  onSubmit={handleSubmit(onSub)} >
      < input type= "text" className ="searchbar" placeholder=" search"   {...register("searchtext",{required:true})} />
      
      <button className = "navsearchlogo" ><CiSearch  onClick={handleSubmit(onSub)}/>
      </button>
      {errors.searchtext && <p className="span">This field is required*</p>}
        </form>

      <div className = "box2">
    {
      user_image ? (<div className="button">
        <img src="https://api.dicebear.com/5.x/initials/svg?seed=teena" alt="image" className="buttonimage"/>
        <button className="btn" onClick = {()=>(setlogoutbox(!logoutbox))}>LogOut</button>
        {logoutbox && <Dialogbox logoutbox = {logoutbox} setlogoutbox = {setlogoutbox}/>}
      </div>):(
        <div className = "button">
       <Link to="/login"> <button className = "btn" onClick={()=>(console.log("login"))}> Login
         </button></Link>
         <Link to="/signup"> <button className = "btn">SignUp
          </button>  </Link>
        </div>
      )
    }
    </div>
</div>
  );
}