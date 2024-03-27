import React, { useEffect, useState } from 'react';

export default function GetUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/users")
            .then(response => response.json())
            .then(data => {
                
                setUsers(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            GetUsers
            <ul>
                {users.map((item, index) => (
                    
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

