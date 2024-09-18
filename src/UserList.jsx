// src/UserList.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; // For styling3

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    // Fetch data from JSONPlaceholder API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // Save data into state
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);

  return (
    <div className="user-list">
      <h1>User List</h1>
      <ul>
        {listOfUsers.map(user => (
          <li key={user.id} className="user-item">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
