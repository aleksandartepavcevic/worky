export type Error = {
  type: string;
  message: string;
};

export type Success = {
  type: string;
  message: string;
};

export type Response = {
  status: number;
  success?: Success;
  error?: Error;
};
