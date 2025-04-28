import { reqResApi } from "../../api/reqRes";

export const getInventories = async () => {
  try {
    const resp = await reqResApi.get('inventory');
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};