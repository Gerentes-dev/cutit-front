import { reqResApi } from "../../api/reqRes";
import { ProductCategoryRequest } from "../types/products";

export const getProduct = async () => {
   try {
      const resp = await reqResApi.get('products');
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
               ...(category && { category }),
               ...(minPrice && { minPrice }),
               ...(maxPrice && { maxPrice }),
               stockAvailable,
            }
         });
      return resp.data;
   } catch (error) {
      console.log(error);
   }
};

