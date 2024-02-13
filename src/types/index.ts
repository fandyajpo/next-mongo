export type Method = "UPDATE" | "CREATE";

export type FormResponse = {
  message?: string;
  codeName?: string;
};

export type Params<T> = T;

export type SlugMeta = {
  params?: { slug?: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export interface AuditInterface {
  createdAt?: string;
  createdBy?: string;
  updateAt?: string;
  updateBy?: string;
}
