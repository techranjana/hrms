

// const Apipage=()=> {
//     const
//      API="https://dummyjson.com/posts";
//     const FetchApiData = async (url) => {
//         try{
//             const res=fetch(url);

//         }
        // catch(error){
//             console.log(error);
//         }
//     };
//     useEffect(()=>{
//         fetchApiData(API);

//     },[]);
//   return (
//     <div>Apipage</div>
//   )
//   }


// export default Apipag

import React, { useEffect, useState } from "react"

const Apipage = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }
  
  return (
    <div>
      Test
    </div>
  );
}

export default Apipage;