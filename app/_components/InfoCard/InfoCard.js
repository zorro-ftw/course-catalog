import GradCapIcon from "@/app/_assets/graduation-cap.icon";
import BookmarkIcon from "@/app/_assets/bookmark.icon";
import USDSquareIcon from "@/app/_assets/usd-square.icon";
import PersonIcon from "@/app/_assets/person.icon";

export default function InfoCard({ payload }) {
  const iconDecider = {
    "graduation-cap": (
      <GradCapIcon additionalClasses={`${payload.iconClasses}`} />
    ),
    bookmark: <BookmarkIcon additionalClasses={`${payload.iconClasses}`} />,
    "usd-square": (
      <USDSquareIcon additionalClasses={`${payload.iconClasses}`} />
    ),
    person: <PersonIcon additionalClasses={`${payload.iconClasses}`} />,
  };

  return (
    <div
      className={`flex flex-row p-5 justify-between w-full h-40 max-w-[255px] ${payload.cardBg} rounded-lg`}
    >
      <div className="flex flex-col justify-start gap-4 ">
        {iconDecider[payload.icon]}
        <p className="cc-text-14-gr-med">{payload.title}</p>
      </div>
      <div className="h-full flex flex-col justify-end cc-text-30-bold">
        {payload.amount}
      </div>
    </div>
  );
}
