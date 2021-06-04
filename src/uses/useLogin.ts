import { ref, Ref } from '@vue/composition-api';
import { LoginInfo } from 'types/LoginInfo';
import apiLogin from 'services/apiLogin';
import { LoginResWrapper } from 'types/LoginResWrapper';
import IncorrectCredentialsException from 'uses/exceptions/IncorrectCredentialsException';
import NotFoundException from 'uses/exceptions/NotFoundException';

export default function useLogin() {

  const logged: Ref<boolean> = ref(false);

  const loginInfo: Ref<LoginInfo> = ref({
    email: '',
    pass: ''
  });

  const login = async () => {
    const response: LoginResWrapper = await apiLogin(loginInfo.value);
    switch (response.status) {
      case 200:
        logged.value = true;
        return response.response;
      case 403:
        throw new IncorrectCredentialsException('Credenciales incorrectas');
      case 404:
        throw new NotFoundException('Usuario no registrado');
      default:
        throw new Error('Undefined Error');
    }
  };
  return { logged, loginInfo, login };
}
