export const documentById = (id: string) => {
  return document.getElementById?.(id) as any;
};

export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
