import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then(res => res.json())
      .then(setUsers)
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>🚀 Azure WebApp + MySQL Demo</h1>
      <h2>Users from Database:</h2>
      <ul>
        {users.length === 0 ? (
          <li>No users found</li>
        ) : (
          users.map(u => <li key={u.id}>{u.name}</li>)
        )}
      </ul>
    </div>
  );
}

export default App;
