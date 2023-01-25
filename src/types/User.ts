export interface IUser {
  _id: string;
  name: string;
  email: string;
  city?: string;
  state?: string;
  country?: string;
  occupation?: string;
  phoneNumber?: string;
  transactions: string[];
  role: "user" | "admin" | "superadmin";
  __v: number;
  createdAt: string;
  updatedAt: string;
}

interface IPerformanceUser extends IUser {
  password: string;
  affiliateStats: {
    _id: string;
    userId: string;
    affiliateSales: string[];
    __v: number;
    createdAt: string;
    updatedAt: string;
  };
}

export interface IPerformance {
  user: IPerformanceUser;
  sales: {
    _id: string;
    userId: string;
    cost: string;
    products: string[];
    __v: number;
    createdAt: string;
    updatedAt: string;
  }[];
}
