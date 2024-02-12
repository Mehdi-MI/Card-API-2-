import "./App.css";
import Card from "./Card";
import { useEffect, useState, useMemo } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch("https://learntokserver.onrender.com/api/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        return data.info; 
      } catch (error) {
        console.error("Error fetching users:", error);
        return [];
      }
    };

    getUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const memoizedCards = useMemo(() => (
    users.map((user) => (
      <Card
        bio={user.email}
        fullName={user.full_name}
        image={user.pfp}
        key={user.id} 
        username={user.user_name}
      />
    ))
  ), [users]);

  return (
    <div>
      {memoizedCards}
    </div>
  );
}

export default App;
