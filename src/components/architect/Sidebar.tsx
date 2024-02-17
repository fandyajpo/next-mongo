"use client";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
const Sidebar = () => {
  const segment = useSelectedLayoutSegment();
  return (
    <div className="w-96 min-h-screen bg-white p-2">
      <pre>{JSON.stringify(segment, null, 2)}</pre>
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
