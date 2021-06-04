import axios from 'axios';
import { CommonUser } from 'types/CommonUser';
import { Cookies } from 'quasar';

export default async function apiAdminNomina(): Promise<CommonUser[]> {
  if (process.env.VUE_APP_BASE_URL) {
    const url: string = process.env.VUE_APP_BASE_URL.concat('/admins');
    try {
      const response = await axios.get<CommonUser[]>(url, {
        headers: {
          Authorization: 'Bearer ' + Cookies.get('token')
        }
      });
      return response.data;
    } catch (e) {
      console.log(e);
    }
    return [];
  }
  return [];
}
