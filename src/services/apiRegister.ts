import axios from 'axios';
import { RegisterUser } from 'types/RegisterUser';

export default async function apiRegister(user: RegisterUser): Promise<number> {
  if (process.env.VUE_APP_BASE_URL) {
    const url: string = process.env.VUE_APP_BASE_URL.concat('/user');
    try {
      const response = await axios.post(url, JSON.parse(JSON.stringify(user)));
      console.log(response);
      return response.status;
    } catch (e) {
      console.log(e);
    }
    return 400;
  }
  return 400;
}
