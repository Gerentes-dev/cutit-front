import { reqResApi } from "../../api/reqRes";

export const getInventories = async () => {
  try {
    const resp = await reqResApi.get('inventory');
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const addInventory = async (productId: string, quantity: number) => {
  try {
    const resp = await reqResApi.post('inventory', {
      productId, quantity
    });
    return resp.data;
  } catch (error) {
    console.log(error)
  }
}