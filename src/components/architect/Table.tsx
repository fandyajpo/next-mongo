"use client";
import Link from "next/link";
import Modal from "./Modal";
import { documentById } from "@/lib/functions";
import { X } from "./Icon";
import { deleteProspect } from "@/service/prospect";
type TableRowComponent<T> = {
  title: string;
  component: keyof T;
};

interface Widget {
  withEditButton?: boolean;
  withRemoveButton?: boolean;
  withCreateNewWidget?: boolean;
  withExportExelWidget?: boolean;
  ExelWidgetId?: string;
  createNewWidgetUrl?: string;
}

interface Props<T> extends Widget {
  data?: T[];
  totalData?: number;
  totalDescription?: string;
  title?: string;
  description?: string;
  onRowClick?: (s: T) => void;
  tableRowComponent?: TableRowComponent<T>[];
}

const Table = <T,>(props: Props<T>) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between m-2">
        <div>
          {props.title ? (
            <p className="font-bold text-black text-xl my-0">{props?.title}</p>
          ) : null}
          {props.description ? (
            <p className="text-gray-500 text-xs my-0 ">{props?.description}</p>
          ) : null}
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col items-end">
            {props.description ? (
              <p className="text-gray-500 text-xs my-0 ">
                {props?.totalDescription}
              </p>
            ) : null}
            <p className="font-bold text-black text-xl my-0 ">
              {props?.totalData ? props?.totalData : 0}
            </p>
          </div>

          {props.withCreateNewWidget && props?.createNewWidgetUrl ? (
            <div className="flex flex-col w-32 items-center justify-center bg-blue-500 rounded">
              <Link
                href={`${props?.createNewWidgetUrl}`}
                className="font-semibold text-white text-sm my-0"
              >
                Create New
              </Link>
            </div>
          ) : null}
          {props.withExportExelWidget ? (
            <div className="flex flex-col w-32 items-center justify-center bg-orange-500 rounded">
              <button
                type="button"
                onClick={() =>
                  documentById(props?.ExelWidgetId as string).showModal()
                }
                className="font-semibold text-white text-sm my-0"
              >
                Export
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <div className="overflow-hidden rounded border-gray-300 shadow border">
              <table className="min-w-full">
                <thead className="bg-white">
                  <tr>
                    {props?.tableRowComponent?.map?.((a, i) => {
                      return (
                        <th
                          key={i}
                          scope="col"
                          className="text-md font-bold text-gray-900 p-4 text-left"
                        >
                          {a?.title}
                        </th>
                      );
                    })}
                    {props.withEditButton || props.withRemoveButton ? (
                      <th className="text-md font-bold text-gray-900 p-4 text-left">
                        ACTION
                      </th>
                    ) : null}
                  </tr>
                </thead>
                <tbody>
                  {props?.data?.map?.((fieldData: any, index: any) => {
                    return (
                      <tr
                        key={index}
                        className={`bg-white border-b border-gray-300 hover:bg-slate-100 hover:cursor-pointer`}
                      >
                        {props?.tableRowComponent?.map?.((data, idx: any) => {
                          return (
                            <td key={idx}>
                              <div className="p-4">
                                {fieldData?.[data?.component] as string}
                              </div>
                            </td>
                          );
                        })}
                        <td>
                          {props.withEditButton || props.withRemoveButton ? (
                            <>
                              <div className="flex gap-2">
                                {props.withEditButton ? (
                                  <Link
                                    href={`/prospect/${fieldData?._id}`}
                                    className="h-10 px-4 flex items-center justify-center rounded bg-green-500 text-sm text-white"
                                  >
                                    Edit
                                  </Link>
                                ) : null}
                                {props.withRemoveButton ? (
                                  <button
                                    onClick={() =>
                                      documentById(
                                        fieldData?._id
                                      )?.showModal?.()
                                    }
                                    type="button"
                                    className="h-10 px-4 flex items-center justify-center rounded bg-red-500 text-sm text-white"
                                  >
                                    Remove
                                  </button>
                                ) : null}
                              </div>
                              <Modal id={fieldData?._id}>
                                <button
                                  type="button"
                                  onClick={() =>
                                    documentById(fieldData?._id)?.close?.()
                                  }
                                >
                                  <X className="w-6 h-6 text-red-500" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => deleteProspect(fieldData?._id)}
                                >
                                  <p>Delete</p>
                                </button>
                              </Modal>
                            </>
                          ) : null}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
