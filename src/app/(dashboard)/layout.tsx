import { PropsWithChildren } from "react";
import Sidebar from "@/components/architect/Sidebar";
interface Props extends PropsWithChildren {}

const Layout = (props: Props) => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full p-4 overflow-y-auto shadow border-r">
        {props.children}
      </div>
      <Sidebar />
    </div>
  );
};

export default Layout;
