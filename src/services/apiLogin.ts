import axios from 'axios';
import { LoginResponse } from 'types/LoginResponse';
import { LoginInfo } from 'types/LoginInfo';
import { LoginResWrapper } from 'types/LoginResWrapper';

export default async function apiLogin(loginInfo: LoginInfo): Promise<LoginResWrapper> {
  if (process.env.VUE_APP_BASE_URL) {
    const url: string = process.env.VUE_APP_BASE_URL.concat('/login');
    try {
      const response = await axios.post<LoginResponse>(url, JSON.parse(JSON.stringify(loginInfo)));
      return {
        response: response.data,
        status: response.status
      };
    } catch (e) {
      const res: LoginResWrapper = {
        response: null,
        status: 400
      };
      if (axios.isAxiosError(e)) {
        if (e.response) {
          res.status = e.response.status;
        }
      }
      return res;
    }
  }
  return {
    status: 400,
    response: null
  };
}
