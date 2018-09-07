export interface IResponse<T> {
  type: boolean;
  message?: string;
  data?: T;
}

export interface IRecordPage<T> extends IResponse<T> {
  type: boolean;
  message?: string;
  data?: T;
  totalResult: number;
  perPage: number;
}
