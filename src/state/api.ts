import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ICustomer, IGeography } from "types/Customer";
import { IDashboard } from "types/Dashboard";
import { IProduct } from "types/Product";
import { ISales } from "types/Sales";
import { ITransactionQuery, ITransactionResponse } from "types/Transaction";
import { IPerformance, IUser } from "types/User";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Products",
    "Customers",
    "Transactions",
    "Geography",
    "Sales",
    "Admins",
    "Performance",
    "Dashboard",
  ],
  endpoints: (build) => ({
    getUser: build.query<IUser, string>({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query<IProduct[], void>({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    getCustomers: build.query<ICustomer[], void>({
      query: () => "client/customers",
      providesTags: ["Customers"],
    }),

    getTransactions: build.query<ITransactionResponse, ITransactionQuery>({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
    getGeography: build.query<IGeography[], void>({
      query: () => "client/geography",
      providesTags: ["Geography"],
    }),
    getSales: build.query<ISales, void>({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),
    getAdmins: build.query<IUser[], void>({
      query: () => "management/admins",
      providesTags: ["Admins"],
    }),
    getUserPerformance: build.query<IPerformance, string>({
      query: (id) => `management/performance/${id}`,
      providesTags: ["Performance"],
    }),
    getDashboard: build.query<IDashboard, void>({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
} = api;
