import { reqResApi } from "../../api/reqRes";

export const getCustomers = async () => {
  try {
    const resp = await reqResApi.get('customers');
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCustomersByName = async (filter:string) => {
  try {
    const resp = await reqResApi.get(`customers/name/${filter}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCustomersByDocument = async (filter:string) => {
  try {
    const resp = await reqResApi.get(`customers/document/${filter}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const addCustomer = async (data:any) => {
  try {
    const resp = await reqResApi.post('customers/save',data);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};