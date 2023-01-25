export interface IDashboard {
  totalCustomers: number;
  yearlyTotalSoldUnits: number;
  yearlySalesTotal: number;
  monthlyData: {
    month: string;
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
  thisMonthStats: {
    month: string;
    totalSales: number;
    totalUnits: number;
    _id: string;
  };
  todayStats: {
    date: string;
    totalSales: number;
    totalUnits: number;
    _id: string;
  };
  transactions: {
    _id: string;
    userId: string;
    cost: string;
    products: string[];
    __v: number;
    createdAt: string;
    updatedAt: string;
  }[];
}
