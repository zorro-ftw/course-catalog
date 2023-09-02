"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import apiService from "@/app/_services/apiService"; // Import the Axios instance

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await apiService.get("/users?limit=100");
      setUsers(response.data.users);
      setFilteredUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filterUsers = (searchInput) => {
    setFilteredUsers(
      users.filter(
        (u) =>
          u.firstName.includes(searchInput) || u.lastName.includes(searchInput)
      )
    );
  };

  const contextValue = {
    users,
    filteredUsers,
    loading,
    filterUsers,
    // Other context values and functions
    // ...
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
