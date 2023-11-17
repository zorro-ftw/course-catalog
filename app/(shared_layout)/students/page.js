"use client";
import { UserContext } from "@/app/_contexts/UserContext";
import { useContext, useDeferredValue, useMemo, useState } from "react";
import SearchIcon from "@/app/_assets/search.icon";
import PrimaryButton from "@/app/_components/PrimaryButton/PrimaryButton";
import { useRouter } from "next/navigation";
import StudentCard from "@/app/_components/StudentCard/StudentCard";
import DropdownMenu from "@/app/_components/DropdownMenu/DropdownMenu";

export default function Students() {
  const { filteredUsers, filterUsers, loading, paginationParams } =
    useContext(UserContext);
  const [searchedName, setSearchedName] = useState("");
  const deferredSearchedName = useDeferredValue(searchedName);
  const dropdownOptions = [
    {
      id: 0,
      value: 6,
    },
    {
      id: 0,
      value: 12,
    },
    {
      id: 0,
      value: 30,
    },
  ];

  useMemo(() => {
    filterUsers(deferredSearchedName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deferredSearchedName]);

  const displayedStudentList = useMemo(() => {
    return filteredUsers
      .slice(
        paginationParams.currentPage * paginationParams.studentsPerPage,
        (paginationParams.currentPage + 1) * paginationParams.studentsPerPage
      )
      .map((u) => <StudentCard key={u.id} student={u} />);
  }, [filteredUsers, paginationParams]);

  console.log(filteredUsers);

  function handleSearch(e) {
    setSearchedName(e.target.value);
  }

  function openNewStudentForm() {}

  return (
    <div className="w-full h-[calc(100%-60px)] min-h-fit duration-300 bg-cc-gray-800 px-4 md:px-8">
      {/** Header row including title, search input and button */}
      <div className="w-full py-3 flex flex-wrap gap-4 items-center justify-between border-b border-cc-gray-100 mb-5">
        <h3 className="cc-text-22-bold">Students List</h3>
        <div className="flex gap-6 flex-wrap md:flex-nowrap">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchedName}
              onChange={handleSearch}
              placeholder="Search..."
              className="relative w-56 h-10 pl-3 py-3 rounded-lg cc-text-14-nor text-black border border-cc-gray-100 outline-none focus:border-cc-gray-400 bg-white placeholder:text-cc-gray-400"
            ></input>
            <SearchIcon additionalClasses="absolute top-[13px] right-4 w-[14px] h-[14px] text-cc-gray-400" />
          </div>
          <PrimaryButton
            type="button"
            onClick={openNewStudentForm}
            additionalClasses="cc-text-14-w-med px-7 py-3 min-w-fit max-w-fit"
          >
            ADD NEW STUDENT
          </PrimaryButton>
        </div>
      </div>
      {/** Table */}
      <table className="w-full border-separate border-spacing-y-2">
        <thead className="cc-text-12-gr-bold-700 text-left">
          <tr>
            <th>{""}</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company Name</th>
            <th>{""}</th>
            <th>{""}</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td>Loading...</td>
            </tr>
          ) : (
            displayedStudentList
          )}
        </tbody>
      </table>
      <div className="flex justify-end">
        <p className="mr-2">Rows per page:</p>
        <DropdownMenu options={dropdownOptions} />
      </div>
    </div>
  );
}
