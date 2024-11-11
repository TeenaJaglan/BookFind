//const apiurl = process.env.REACT_APP_API ;
import {apiurl} from '../../../public/searchmethods.jsx'
import {apiconnector} from './apiconnector.jsx';
import {setbookdata, setspecificdata} from "../slice/profileSlice.jsx"
import { setloading } from '../slice/searchSlice.jsx';
const searchapi = async function(data,key,dispatch,bookdata){
  try{
    console.log("searchapi function starts . data recieved is:",data,apiurl,key);
    dispatch(setloading(true));
    let s = data.searchtext ;
   await getallbooks(s,key,dispatch);
   dispatch(setloading(false));
  }
  catch(err){
    console.log("error occurred during api call",err);
  }
}
 
 const getallbooks = async function(params,key,dispatch,bookdata){
   try{
  const url = apiurl + "all";
  console.log("url is:",url,key);
  const data = await apiconnector("GET",url,params);
  if(!data)return res.json({
    message:"url is incorrect , hence no response"
  })
  console.log(data.data);
  dispatch(setbookdata(data.data.docs));
  console.log("getallbooks function",data,key);

  if(key=="title"){ await  via_title(data.data.docs,params,dispatch);}
  else if(key=="author_name"){await via_author_name(data.data.docs,params,dispatch);}
  else if(key=="language"){await via_language(data.data.docs,params,dispatch);}
  else if(key=="publisher"){await via_publisher(data.data.docs,params,dispatch);}
  else if(key=="first_publish_year"){await via_first_publish_year(data.data.docs,params,dispatch);}
  else if(key = "subject"){await via_subject(data.data.docs,params,dispatch);}
  else if(key=="number_of_pages_median"){await via_number_of_pages_median(data.data.docs,params,dispatch);}
   }
  catch(err){
  console.log("error in getallbooks function",err);
  }
 }

 const via_title =async function(info,params,dispatch){
  const n = info.filter((obj)=>{
    const arr = obj.title; 
    if (arr && (Array.isArray(arr) || typeof arr === 'string')) {
        let m = arr.includes(params); // Now it's safe to call includes
        console.log("in via_title function ,arr && m:", arr, m);
        return m; 
    }
  });
  console.log("via_title result:",n);
  dispatch(setspecificdata(n));
 }
 const via_author_name = async function(info,params,dispatch){
  const n = info.filter((obj)=>{
    const arr = obj.author_name; 
    if (arr && (Array.isArray(arr) || typeof arr === 'string')) {
        let m = arr.includes(params); // Now it's safe to call includes
        console.log("in via_author_name function ,arr && m:", arr, m,params ,typeof params);
        return m; 
    }
  });
  console.log("via_author_name result:",n);
  dispatch(setspecificdata(n));
 }
 const via_language = async function(info,params,dispatch){
  const n = info.filter((obj)=>{
    const arr = obj.language; 
    if (arr && (Array.isArray(arr) || typeof arr === 'string')) {
        let m = arr.includes(params); // Now it's safe to call includes
        console.log("in via_language function ,arr && m:", arr, m);
        return m; 
    }
  });
  console.log("via_language result:",n);
  dispatch(setspecificdata(n));
 }
 const via_publisher = async function(info,params,dispatch){
  const n = info.filter((obj)=>{
    const arr = obj.publisher; 
    if (arr && (Array.isArray(arr) || typeof arr === 'string')) {
        let m = arr.includes(params); // Now it's safe to call includes
        console.log("in via_publisher function ,arr && m:", arr, m);
        return m; // Return the result of includes directly
    }
    console.log("Publisher is undefined or not valid:", arr);
    return false;
  });
  console.log("via_publisher result:",n);
  dispatch(setspecificdata(n));
 }
 const via_first_publish_year = async function(info,params,dispatch){
  const n = info.filter((obj)=>{
    const arr = obj.first_publish_year; 
    if (arr && (Array.isArray(arr) || typeof arr === 'string')) {
      params = Number(params);
        let m = arr.includes(params); // Now it's safe to call includes
        console.log("in via_first_publish_year function ,arr && m:", arr, m);
        return m; 
    }
  });
  console.log("via_first_publish_year result:",n);
  dispatch(setspecificdata(n));
 }
 const via_subject = async function(info,params,dispatch){
  const n = info.filter((obj)=>{
    const arr = obj.subject; 
    if (arr && (Array.isArray(arr) || typeof arr === 'string')) {
        let m = arr.includes(params); // Now it's safe to call includes
        console.log("in via_subject function ,arr && m:", arr, m,params ,typeof params);
        return m; 
    }
  });
  console.log("subject result:",n);
  dispatch(setspecificdata(n));
 }
 const via_number_of_pages_median = async function(info,params,dispatch){
  const n = info.filter((obj)=>{
    const arr = obj.number_of_pages_median; 
    if (arr && (Array.isArray(arr) || typeof arr === 'string')) {
        let m = arr.includes(params); // Now it's safe to call includes
        console.log("in via_number_of_pages_median function ,arr && m:", arr, m);
        return m; 
    }
  });
  console.log("via_number_of_pages_median result:",n);
  dispatch(setspecificdata(n));
 }
 const includes = function(arr,params){
   var array;
   for(let i=0;i<arr.length;i++){
     let a = arr[i].toString();
     let p = params.toString();
     let len = (params.length>=a.length)?a.length:params.length;
     let k =true;
     for(let j=0;j<len;j++){
       let ah = a.charAt(j);
       let ph = params.charAt(j);
     if(ah!=ph && Number(ph)+ 32 !=Number(ah) && Number(ph)!=Number(ah)+32){k = false;break;}
     }
     if(k==true){array.push(arr[i]);}
   }
   return array;
 }
 export default  searchapi ;