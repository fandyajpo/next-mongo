import Link from "next/link";
const Sidebar = () => {
  return (
    <div className="w-96 min-h-screen bg-white p-2">
      <Link
        href={"/dealer"}
        className="w-full h-12 bg-gray-200 flex items-center px-4 "
      >
        Dealer
      </Link>
      <Link
        href={"/prospect"}
        className="w-full h-12 bg-gray-200 flex items-center px-4 "
      >
        Prospect
      </Link>
    </div>
  );
};

export default Sidebar;
