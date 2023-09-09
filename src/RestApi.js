import { useState, useEffect } from "react";
async function getPostsData(url) {            
             let response = await fetch(url);
             let result = await response.json();
             console.log(response);
             console.log(result); 
        }
        
        function RestApi() {
                 const [count, setCount] = useState(0);
                 const [count1, setCount1] = useState(0);
                
                  const [posts, setPosts] = useState([]);
                 useEffect(()=>{
                     let url = "https://jsonplaceholder.typicode.com/comments";
                      getPostsData(url);
                     
                 
                 }, []);
                
                   return (
                     <h1> Get Api call check</h1>
                      
                    );}
export default RestApi;