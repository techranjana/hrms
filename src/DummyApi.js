import { useState, useEffect } from "react";
async function getPostsData(url) {
    // let response = await fetch('http://192.168.1.13/hs_general_store/user/login', {
    //      method: 'POST',
    //        body: JSON.stringify({
    //          email:"",
    //           password:"",}),
    //           headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //              }
    //      });
    //         const res = await response.json();
    //         console.log(res);
            
                 let response = await fetch(url);
             let result = await response.json();
             console.log(response);
             console.log(result); 
        }
        
        function DummyApi() {
                 const [count, setCount] = useState(0);
                 const [count1, setCount1] = useState(0);
                
                  const [posts, setPosts] = useState([]);
                 useEffect(()=>{
                     let url = "https://dummyjson.com/products";
                      getPostsData(url);
                     
                 
                 }, []);
                
                   return (
                     <>
                      <button className="btn btn-primary" onClick={()=> 
                      { 
                        setCount(count+1)}}>click me {count}</button> 
                 <button className="btn btn-primary" onClick={()=>
                  {
                     setCount1(count1+1)}}>click me {count1}</button>
                       </>
                      
                        );}
export default DummyApi;