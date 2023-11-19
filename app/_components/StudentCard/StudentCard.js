import PenIcon from "@/app/_assets/pen.icon";
import Avatar from "../Avatar/Avatar";
import TrashIcon from "@/app/_assets/trash.icon";

export default function StudentCard({ student }) {
  return (
    <tr className="cc-text-14-nor text-black bg-white">
      {/** Profile Image */}
      <td className="whitespace-nowrap max-w-full py-4 pl-4 rounded-tl-lg rounded-bl-lg">
        <Avatar
          imageURL={student.image}
          additionalClasses="w-[65px] h-[55px] rounded-md "
          backgroundPositioning="center center"
          backgroundSizing="65px 55px"
        />
      </td>

      {/** Name */}
      <td className="pr-2">{student.firstName + " " + student.lastName}</td>

      {/** Email */}
      <td className="pr-2">{student.email}</td>

      {/** Phone */}
      <td className="pr-2">{student.phone}</td>

      {/** Website */}
      <td className="pr-2">{student.domain}</td>

      {/** Company */}
      <td className="pr-2">{student.company.name}</td>

      {/** Edit */}
      <td className="pr-2">
        <PenIcon additionalClasses="w-5 h-5 text-cc-orange-200 cursor-pointer" />
      </td>

      {/** Delete */}
      <td className="pr-5 rounded-tr-lg rounded-br-lg">
        <TrashIcon additionalClasses="w-5 h-5 text-cc-orange-200 cursor-pointer mx-auto my-auto" />
      </td>
    </tr>
  );
}
