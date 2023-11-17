import DropdownIcon from "@/app/_assets/dropdown.icon";
import { UserContext } from "@/app/_contexts/UserContext";
import { Menu, Transition } from "@headlessui/react";
import { useContext } from "react";

export default function DropdownMenu({ options }) {
  const { paginationParams, updateStudentsPerPage } = useContext(UserContext);

  return (
    <Menu as="div" className="text-end">
      <Menu.Button as="button" className="flex gap-1 items-center px-3">
        <span>{paginationParams.studentsPerPage}</span>
        <DropdownIcon additionalClasses="text-cc-gray-500 w-3 h-3" />
      </Menu.Button>
      <Transition
        enter="transition duration-100 ease-in"
        enterFrom="transform scale-75 opacity-0 origin-top"
        enterTo="transform scale-100 opacity-100 origin-top"
        leave="transition duration-100 ease-out"
        leaveFrom="transform scale-100 opacity-100 origin-top"
        leaveTo="transform scale-75 opacity-0 origin-top"
      >
        <Menu.Items
          as="ul"
          className="flex flex-col w-10 bg-white shadow-md shadow-cc-gray-500"
        >
          {options.map((opt) => (
            <Menu.Item as="li" key={opt.id} className="">
              {({ active }) => (
                <button
                  className={`py-2 w-full ${active && "bg-cc-gray-500/50"}`}
                  onClick={() => updateStudentsPerPage(opt.value)}
                >
                  {opt.value}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
