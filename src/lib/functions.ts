export const documentById = (id: string) => {
  return document.getElementById?.(id) as any;
};
