export interface IProductStat {
  _id: string;
  productId: string;
  yearlySalesTotal: number;
  yearlyTotalSoldUnits: number;
  monthlyData: {
    month: string;
    totalSales: number;
    totalUnits: number;
    _id: string;
  }[];
  dailyData: {
    date: string;
    totalSales: number;
    totalUnits: number;
    _id: string;
  }[];
  __v: number;
  createdAt: string;
  updatedAt: string;
}

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  rating: number;
  supply: number;
  stat: IProductStat;
  __v: number;
  createdAt: string;
  updatedAt: string;
}
