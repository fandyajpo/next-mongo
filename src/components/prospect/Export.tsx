"use client";
import { ProspectInterface } from "@/schema/prospect";
import Modal from "../architect/Modal";
import XLSX from "@/lib/hooks/useXLSX";

interface Props {
  data: ProspectInterface[];
}

const ExportProspect = (props: Props) => {
  return (
    <Modal id="prospectExel">
      <button
        type="button"
        onClick={() => XLSX(props.data, "ProspectData")}
        className="p-4 rounded"
      >
        Download
      </button>
    </Modal>
  );
};

export default ExportProspect;
