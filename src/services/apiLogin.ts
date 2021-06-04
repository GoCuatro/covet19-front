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
      console.log(e);
    }
    return {
      status: 400,
      response: null
    };
  }
  return {
    status: 400,
    response: null
  };
}
