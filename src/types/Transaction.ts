export interface ITransaction {
  _id: string;
  userId: string;
  cost: string;
  products: string[];
  __v: number;
  createdAt: string;
  updatedAt: string;
}

export interface ITransactionQuery {
  page: number;
  pageSize: number;
  sort: string;
  search: string;
}

export interface ITransactionResponse {
  transactions: ITransaction[];
  total: number;
}
