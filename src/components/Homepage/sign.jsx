import './home.css';
import { IoBookSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
export default function Sign(){
  return (
    <div className = "logo">
    <div className = "logo1">
        <IoBookSharp  className="booklogo"/>
        <CiSearch className = "searchlogo"/>
        <pre><strong>BOOK FINDER</strong></pre>
        </div>
    </div>
  );
}