import ProspectList from "@/components/prospect/List";
import { Params } from "@/types";
import { Suspense } from "react";

interface Props
  extends Params<{
    params: { [key: string]: string | string[] | undefined };
    searchParams: { [key: string]: string | string[] | undefined };
  }> {}

const Prospect = (props: Props) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ProspectList {...props} />
    </Suspense>
  );
};

export default Prospect;
