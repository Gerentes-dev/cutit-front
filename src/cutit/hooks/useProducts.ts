import { useState } from "react";
import { ProductCategoryRequest } from "../types/products";
import { getProduct, getProductWithFilter } from "../services";

export const useProducts = () => {
   const [products, setProducts] = useState([]);
   const getProductsWithFilter = async (productCategoryRequest: ProductCategoryRequest): Promise<void> => {
      try {
         const resp = await getProductWithFilter(productCategoryRequest)
         setProducts(resp || []);
      } catch (error) {
         console.log(error);
      }
   };

   const getProducts = async (): Promise<void> => {
      try {
         const resp = await getProduct();
         setProducts(resp || []);
      } catch (error) {
         console.log(error);
      }
   };

   return { products, getProductsWithFilter, getProducts };
}
