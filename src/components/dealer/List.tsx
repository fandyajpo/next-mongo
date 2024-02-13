import { DealerInterface } from "@/schema/dealer";
import Table from "../architect/Table";
// const getDealer = async () => {
//   const req = await fetch("http://localhost:3002/api/dealer", {
//     method: "GET",
//   });

//   const res = await req.json();

//   return res.data;
// };
const DealerList = async () => {
  // const dealer: DealerInterface[] = await getDealer();

  return (
    <div>
      {/* <Table<DealerInterface>
        title="PROSPECT"
        totalDescription="This all Prospect list"
        data={dealer}
        description="Prospect sangat keren"
        totalData={100}
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
      /> */}
    </div>
  );
};

export default DealerList;
