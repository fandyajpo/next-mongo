import { PropsWithChildren } from "react";
import { pageClient } from "@/lib/mongo";
interface Props extends PropsWithChildren {}

const Layout = pageClient(async (props: Props) => {
  return <>{props.children}</>;
});

export default Layout;
