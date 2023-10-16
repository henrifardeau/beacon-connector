export type InitOptions = {
  publicKey: string;
  appId: string;
  dsn?: string;
  enable?: boolean;
  debug?: boolean;
};

export type SendOptions = {
  formId: string;
  data: Record<
    string,
    string | number | boolean | string[] | number[] | boolean[]
  >;
};
