import { DealerInterface } from "@/schema/dealer";
import Table from "../architect/Table";
import { Params } from "@/types";

interface Props
  extends Params<{
    params: { [key: string]: string | string[] | undefined };
    searchParams: { [key: string]: string | string[] | undefined };
  }> {}

const getDealer = async (page: number) => {
  const req = await fetch(
    `http://localhost:3002/api/dealer?page=${page}&limit=10`,
    {
      method: "GET",
      next: {
        tags: ["dealers"],
      },
    }
  );

  const res = await req.json();

  return res;
};
const DealerList = async (props: Props) => {
  const dealer = await getDealer(Number(props?.searchParams?.page));

  return (
    <div>
      <Table<DealerInterface>
        title="DEALER"
        totalDescription="This all Prospect list"
        data={dealer?.data}
        description="Prospect sangat keren"
        totalData={dealer?.total}
        tableRowComponent={[
          {
            component: "name",
            title: "Name",
          },
          {
            component: "address",
            title: "Address",
          },
        ]}
      />
    </div>
  );
};

export default DealerList;
