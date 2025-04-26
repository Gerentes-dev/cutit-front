import { reqResApi } from "../../api/reqRes";
import { ProductCategoryRequest } from "../types/products";

export const getProduct = async () => {
   try {
      const resp = await reqResApi.get('chainsaws/all');
      return resp.data;
   } catch (error) {
      console.log(error);
   }
};

export const getProductWithFilter = async ({
   category,
   minPrice,
   maxPrice,
   stockAvailable,
}: ProductCategoryRequest) => {
   try {
      const resp = await reqResApi.get('products/filter',
         {
            params:
            {
               category,
               minPrice,
               maxPrice,
               stockAvailable,
            }
         });
      return resp.data;
   } catch (error) {
      console.log(error);
   }
};

