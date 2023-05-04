import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = `http://eugene2r.beget.tech/api/`;
const key = `Basic YWRtaW46MTIzMTIz`;

export const houseData = createApi({
  reducerPath: "houseData",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
    headers: {
      //   Accept: "application/json",
      Authorization: "Basic YWRtaW46MTIzMTIz",
    },
  }),
  endpoints: (build) => ({
    getDishes: build.query<any, void>({
      query: () => `dishes`,
    }),
    getEntertaiments: build.query<any, void>({
      query: () => `entertaiments`,
    }),
    getFeedingInfo: build.query<any, void>({
      query: () => `feeding-info`,
    }),
    getInfo: build.query<any, void>({
      query: () => `info`,
    }),
    getObjects: build.query<any, void>({
      query: () => `objects/`,
    }),
  }),
});

export const {
  useGetDishesQuery,
  useGetEntertaimentsQuery,
  useGetFeedingInfoQuery,
  useGetInfoQuery,
  useGetObjectsQuery,
} = houseData;