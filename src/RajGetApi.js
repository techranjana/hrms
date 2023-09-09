import React, { useState, useEffect } from "react";

function RajGetApi() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Define the URL of the GET API
        const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

        // Make a GET request to the API
        fetch(apiUrl)
            .then((response) => response.json())
            .then((responseData) => {
                setData(responseData); 
                // Update the state with the fetched data
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="container">
            <h1> hello Data from GET API:</h1>
            <ul>
                {Array.isArray(data) && data.map((item, index) => (
                    <li key={index}>{item.name} - {item.id}</li>
                ))}
            </ul>
        </div>
    );
}

export default RajGetApi;
