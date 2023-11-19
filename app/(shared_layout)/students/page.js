"use client";
import { UserContext } from "@/app/_contexts/UserContext";
import {
  useContext,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
} from "react";
import SearchIcon from "@/app/_assets/search.icon";
import PrimaryButton from "@/app/_components/PrimaryButton/PrimaryButton";
import { useRouter } from "next/navigation";
import StudentCard from "@/app/_components/StudentCard/StudentCard";
import DropdownMenu from "@/app/_components/DropdownMenu/DropdownMenu";
import LeftArrowIcon from "@/app/_assets/left-arrow.icon";
import RightArrowIcon from "@/app/_assets/right-arrow.icon";

export default function Students() {
  const {
    filteredUsers,
    filterUsers,
    loading,
    paginationParams,
    goToNextPage,
    goToPreviousPage,
  } = useContext(UserContext);
  const [searchedName, setSearchedName] = useState("");
  const deferredSearchedName = useDeferredValue(searchedName);
  const dropdownOptions = [
    {
      id: 0,
      value: 6,
    },
    {
      id: 1,
      value: 12,
    },
    {
      id: 2,
      value: 30,
    },
  ];

  useEffect(() => {
    filterUsers(deferredSearchedName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deferredSearchedName]);

  const displayedStudentList = filteredUsers
    .slice(
      (paginationParams.currentPage - 1) * paginationParams.studentsPerPage,
      paginationParams.currentPage * paginationParams.studentsPerPage
    )
    .map((u) => <StudentCard key={u.id} student={u} />);

  function handleSearch(e) {
    setSearchedName(e.target.value);
  }

  function openNewStudentForm() {}

  return (
    <div className="w-full h-[calc(100%-60px)] min-h-fit duration-300 bg-cc-gray-800 px-3 md:px-8 pb-5">
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
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-2 ">
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
      </div>
      {!loading && (
        <div className="flex justify-end gap-6 lg:gap-12">
          <div className="flex ">
            <p className="lg:mr-2 cc-text-14-nor text-cc-gray-500">
              Rows per page:
            </p>
            <DropdownMenu options={dropdownOptions} />
          </div>
          <div className="flex gap-2 h-fit items-center text-cc-gray-500">
            <p className="mr-2 cc-text-14-nor ">{`${paginationParams.firstDisplayedItemIndex}-${paginationParams.lastDisplayedItemIndex} of ${filteredUsers.length}`}</p>
            <LeftArrowIcon
              onClick={goToPreviousPage}
              additionalClasses="w-6 h-6 cursor-pointer"
            />
            <RightArrowIcon
              onClick={goToNextPage}
              additionalClasses="w-6 h-6 cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
}
