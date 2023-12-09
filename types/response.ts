export type Error = {
  type: string;
  message: string;
};

export type Response = {
  status: number;
  error?: Error;
};
