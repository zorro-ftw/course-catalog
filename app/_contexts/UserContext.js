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
    firstDisplayedItemIndex: 0,
    lastDisplayedItemIndex: 0,
  });

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await apiService.get("/users?limit=0");
      setUsers(response.data.users);
      setFilteredUsers(response.data.users);

      // Calculate and update total pages of paginationParams
      const newPaginationParams = { ...paginationParams };
      newPaginationParams.totalPages = Math.ceil(
        response.data.users.length / newPaginationParams.studentsPerPage
      );
      newPaginationParams.firstDisplayedItemIndex = 1;
      newPaginationParams.lastDisplayedItemIndex = 6;
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

  useEffect(() => {
    const newPaginationParams = { ...paginationParams };
    if (newPaginationParams.currentPage === 1) {
      newPaginationParams.firstDisplayedItemIndex = 1;
    } else {
      newPaginationParams.firstDisplayedItemIndex =
        (newPaginationParams.currentPage - 1) *
          newPaginationParams.studentsPerPage +
        1;
    }

    newPaginationParams.lastDisplayedItemIndex =
      newPaginationParams.currentPage * newPaginationParams.studentsPerPage <=
      filteredUsers.length
        ? newPaginationParams.currentPage * newPaginationParams.studentsPerPage
        : filteredUsers.length;

    setPaginationParams(newPaginationParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    filteredUsers,
    paginationParams.currentPage,
    paginationParams.studentsPerPage,
  ]);

  // Filter student list
  const filterUsers = (searchInput) => {
    const newFilteredUsers = users.filter(
      (u) =>
        u.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
        u.lastName.toLowerCase().includes(searchInput.toLowerCase())
    );
    const newPaginationParams = { ...paginationParams };
    newPaginationParams.currentPage = 1;
    setFilteredUsers(newFilteredUsers);
    setPaginationParams(newPaginationParams);
  };

  const updateStudentsPerPage = (num) => {
    const newPaginationParams = { ...paginationParams };
    newPaginationParams.studentsPerPage = num;
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
    goToPreviousPage,
    goToNextPage,
    updateStudentsPerPage,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
