import * as XLSX from "xlsx";

const useXLSX = (data: any[], fileName: string) => {
  try {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    const fn = `${fileName}.xlsx`;
    return XLSX.writeFile(wb, fn);
  } catch (err) {
    throw err;
  }
};

export default useXLSX;
