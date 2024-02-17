import ProspectList from "@/components/prospect/List";
import { Params } from "@/types";
import { Suspense } from "react";
import Loading from "./loading";
interface Props
  extends Params<{
    params: { [key: string]: string | string[] | undefined };
    searchParams: { [key: string]: string | string[] | undefined };
  }> {}

const Prospect = (props: Props) => (
  <Suspense fallback={<Loading />}>
    <ProspectList {...props} />
  </Suspense>
);

export default Prospect;
