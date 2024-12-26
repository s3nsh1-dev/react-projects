import React from "react";
import UsersList from "./components/UsersList";
export default function App() {
  return (
    <div className='container mx-auto'>
      <UsersList />
    </div>
  );
}

// GET http://localhost:3001/users
