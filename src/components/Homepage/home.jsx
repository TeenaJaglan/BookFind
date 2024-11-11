import './home.css';
import { IoBookSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Navbar from './navbar';
import Searchbox from './searchbox';
import Sign from './sign.jsx'
import AllCards from '../card/AllCards';
export default function Home(){
  return(
    <div className = "homebox">
      <Navbar/>
      <Searchbox/>
      <AllCards/>
      </div>
  );
}