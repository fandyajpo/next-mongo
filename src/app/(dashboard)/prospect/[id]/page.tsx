import ProspectForm from "@/components/form/ProspectForm";
import { ProspectInterface } from "@/schema/prospect";
import { getProspectById } from "@/service/prospect";
import { Params } from "@/types";
interface Props
  extends Params<{
    params: { [key: string]: string | string[] | undefined };
    searchParams: { [key: string]: string | string[] | undefined };
  }> {}

const CreateProspect = async (props: Props) => {
  const prospectById: ProspectInterface = await getProspectById(
    props?.params?.id
  );

  console.log(prospectById);

  return (
    <div>
      <pre>{JSON.stringify(prospectById, null, 2)}</pre>
      <ProspectForm method="UPDATE" data={prospectById} />
    </div>
  );
};

export default CreateProspect;
