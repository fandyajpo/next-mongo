import DealerList from "@/components/dealer/List";
import { Suspense } from "react";
import Loading from "./loading";
const Dealer = () => {
  return (
    <Suspense fallback={<Loading />}>
      <DealerList />
    </Suspense>
  );
};

export default Dealer;
