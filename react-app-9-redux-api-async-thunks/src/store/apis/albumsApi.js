import createAPI from "@reduxjs/toolkit/query/react";

/*
when we create an api with this process, in back of code
it creates a slice and that slice stores tons of date like
states related to the request we are going gto make with thi API
*/
export const albumApi = createAPI({
  reducerPath: "albums",
});
