import React, { useEffect, useState } from "react";

export default function UserProfile({ id }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (!response.ok) {
          throw new Error(`status: ${response.status}`);
        }
        const data = await response.json();
        setUser(data);
        console.log("User fetched:", data);
      } catch (err) {
        console.log("Error fetching user:", err);
      }
    };
    fetchUser();
  }, [id]);

  return (
    <>
      <h2>UserProfile</h2>
      {/* if there is no user will show the loading screen. */}
      {user ? (
        <div>
          <p>User ID:{user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
