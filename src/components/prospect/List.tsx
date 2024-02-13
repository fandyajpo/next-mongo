import { DealerInterface } from "@/schema/dealer";
import Table from "../architect/Table";
import { ProspectInterface } from "@/schema/prospect";
import Paging from "../architect/Pagination";
import { Params } from "@/types";

interface Props
  extends Params<{
    params: { [key: string]: string | string[] | undefined };
    searchParams: { [key: string]: string | string[] | undefined };
  }> {}

const getProspect = async (page: number) => {
  const req = await fetch(
    `http://localhost:3002/api/prospect?page=${page}&limit=10`,
    {
      method: "GET",
      next: {
        tags: ["prospects"],
      },
    }
  );

  const res = await req.json();

  return res;
};
const ProspectList = async (props: Props) => {
  const prospect = await getProspect(Number(props?.searchParams?.page));

  return (
    <>
      <Table<ProspectInterface>
        withEditButton
        withRemoveButton
        withCreateNewWidget
        createNewWidgetUrl="/prospect/create"
        title="PROSPECT"
        totalDescription="This all Prospect list"
        data={prospect?.data}
        description="Prospect sangat keren"
        totalData={prospect?.total}
        tableRowComponent={[
          {
            component: "customer",
            title: "Customer Name",
          },
          {
            component: "phone",
            title: "Phone Number",
          },
          {
            component: "description",
            title: "Description",
          },
          {
            component: "source",
            title: "Source",
          },
          {
            component: "sales",
            title: "Sales",
          },
          {
            component: "dealer",
            title: "Dealer",
          },
          {
            component: "team",
            title: "Team",
          },
        ]}
      />
      <Paging
        total={Number(prospect?.total)}
        currentPage={Number(props?.searchParams?.page)}
        limit={10}
      />
    </>
  );
};

export default ProspectList;
