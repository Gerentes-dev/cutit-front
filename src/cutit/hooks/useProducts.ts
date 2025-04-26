import { useState } from "react";
import { ProductCategoryRequest } from "../types/products";

export const useProducts = () => {
   const [products, setProducts] = useState([]);
   const getProductWithFilter = async (productCategoryRequest: ProductCategoryRequest): Promise<any> => {
      try {
         const resp = await getProductWithFilter(productCategoryRequest)
         setProducts(resp.data);
      } catch (error) {
         console.log(error);
      }
   };

   return { products, getProductWithFilter };
}
