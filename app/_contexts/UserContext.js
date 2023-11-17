"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import apiService from "@/app/_services/apiService"; // Import the Axios instance

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paginationParams, setPaginationParams] = useState({
    studentsPerPage: 6,
    currentPage: 1,
    totalPages: 0,
  });

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await apiService.get("/users?limit=100");
      setUsers(response.data.users);
      setFilteredUsers(response.data.users);

      // Calculate and update total pages of paginationParams
      const newPaginationParams = { ...paginationParams };
      newPaginationParams.totalPages = Math.ceil(
        response.data.users.length / newPaginationParams.studentsPerPage
      );
      setPaginationParams(newPaginationParams);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Filter student list
  const filterUsers = (searchInput) => {
    setFilteredUsers(
      users.filter(
        (u) =>
          u.firstName.includes(searchInput) || u.lastName.includes(searchInput)
      )
    );
  };

  const updateStudentsPerPage = (num) => {
    const newPaginationParams = { ...paginationParams };
    newPaginationParams.studentsPerPage = num;
    setPaginationParams(newPaginationParams);
  };

  // Directly navigate to a page
  const goToPage = (pageNo) => {
    const newPaginationParams = { ...paginationParams };
    newPaginationParams.currentPage = pageNo;
    setPaginationParams(newPaginationParams);
  };

  // Navigate to previous page
  const goToPreviousPage = () => {
    if (paginationParams.currentPage > 1) {
      const newPaginationParams = { ...paginationParams };
      newPaginationParams.currentPage--;
      setPaginationParams(newPaginationParams);
    }
  };

  // Navigate to previous page
  const goToNextPage = () => {
    if (paginationParams.currentPage < paginationParams.totalPages) {
      const newPaginationParams = { ...paginationParams };
      newPaginationParams.currentPage++;
      setPaginationParams(newPaginationParams);
    }
  };

  const contextValue = {
    users,
    filteredUsers,
    loading,
    filterUsers,
    paginationParams,
    goToPage,
    goToPreviousPage,
    goToNextPage,
    updateStudentsPerPage,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
