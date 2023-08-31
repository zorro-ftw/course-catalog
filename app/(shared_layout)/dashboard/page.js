import InfoCard from "@/app/_components/InfoCard/InfoCard";

export default function DashBoard() {
  const cards = [
    {
      icon: "graduation-cap",
      title: "Students",
      amount: "243",
      iconClasses: "w-12 h-9 text-cc-blue-200",
      cardBg: "bg-cc-blue-300",
    },
    {
      icon: "bookmark",
      title: "Course",
      amount: "13",
      iconClasses: "w-7 h-9 text-cc-pink-100",
      cardBg: "bg-cc-pink-200",
    },
    {
      icon: "usd-square",
      title: "Payments",
      amount: "556,000₺",
      iconClasses: "w-9 h-10 text-cc-orange-300",
      cardBg: "bg-cc-orange-400",
    },
    {
      icon: "person",
      title: "Users",
      amount: "3",
      iconClasses: "w-8 h-8 text-white",
      cardBg: "bg-grad-49 from-cc-orange-200 to-cc-orange-100",
    },
  ];

  const cardsDisplay = cards.map((c) => <InfoCard key={c} payload={c} />);

  return (
    <>
      <div className="w-full px-4 md:px-8 flex flex-row flex-wrap justify-evenly mt-8 gap-5">
        {cardsDisplay}
      </div>
    </>
  );
}
