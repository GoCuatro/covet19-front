import axios from 'axios';
import { Cookies } from 'quasar';
import { CommonUser } from 'types/CommonUser';

export default async function apiAdminUpdate(admin: CommonUser) {
  if (process.env.VUE_APP_BASE_URL) {
    const url: string = process.env.VUE_APP_BASE_URL.concat('/admin');
    try {
      const response = await axios.patch(url, JSON.parse(JSON.stringify(admin)), {
        headers: {
          Authorization: 'Bearer ' + Cookies.get('token')
        }
      });
      return response.status;
    } catch (e) {
      console.log(e);
    }
  }
}
