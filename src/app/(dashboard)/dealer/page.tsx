import DealerList from "@/components/dealer/List";
import { Suspense } from "react";
import Loading from "./loading";
import { Params } from "@/types";

interface Props
  extends Params<{
    params: { [key: string]: string | string[] | undefined };
    searchParams: { [key: string]: string | string[] | undefined };
  }> {}

const Dealer = (props: Props) => {
  return (
    <Suspense fallback={<Loading />}>
      <DealerList {...props} />
    </Suspense>
  );
};

export default Dealer;
