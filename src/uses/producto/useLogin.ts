import { ref, Ref } from '@vue/composition-api';
import { LoginInfo } from 'types/LoginInfo';
import apiLogin from 'services/apiLogin';
import { LoginResWrapper } from 'types/LoginResWrapper';

export default function useLogin() {

  const logged: Ref<boolean> = ref(false);

  const loginInfo: Ref<LoginInfo> = ref({
    email: '',
    pass: ''
  });

  const login = async () => {
    const response: LoginResWrapper = await apiLogin(loginInfo.value);
    if (response.status == 200) {
      logged.value = true;
      return response.response;
    }
    return null;
  };
  return { logged, loginInfo, login };
}
