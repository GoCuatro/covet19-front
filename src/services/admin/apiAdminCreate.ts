import axios from 'axios';
import { CommonUser } from 'types/CommonUser';
import { Cookies } from 'quasar';

export default async function apiAdminCreate(admin: CommonUser): Promise<boolean> {
  if (process.env.VUE_APP_BASE_URL) {
    const url: string = process.env.VUE_APP_BASE_URL.concat('/admin');
    try {
      const response = await axios.post<CommonUser[]>(url, JSON.parse(JSON.stringify(admin)), {
        headers: {
          Authorization: 'Bearer ' + Cookies.get('token')
        }
      });
      if (response.status === 201) {
        return true;
      }
    } catch (e) {
      console.log(e);
    }
    return false;
  }
  return false;
}
