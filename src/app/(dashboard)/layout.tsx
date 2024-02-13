import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

const Layout = (props: Props) => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full p-4 overflow-y-auto">{props.children}</div>
      <div className="w-96 min-h-screen bg-blue-500">Hai</div>
    </div>
  );
};

export default Layout;
