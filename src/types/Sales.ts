export interface ISales {
  _id: string;
  totalCustomers: number;
  yearlySalesTotal: number;
  yearlyTotalSoldUnits: number;
  year: number;
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
  salesByCategory: {
    shoes: number;
    clothing: number;
    accessories: number;
    misc: number;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}
