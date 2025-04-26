import { reqResApi } from "../../api/reqRes";

export const getData = async () => {
    try {
        const resp = await reqResApi.get('producst');
        console.log(resp.data);
    } catch (error) {
        console.log(error);
    }
  }