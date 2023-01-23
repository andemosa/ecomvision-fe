export interface ICustomer {
  _id: string;
  name: string;
  email: string;
  city: string;
  state: null;
  country: string;
  occupation: string;
  phoneNumber: string;
  transactions: string[];
  role: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
}

export interface IGeography {
  id: string;
  value: number;
}
