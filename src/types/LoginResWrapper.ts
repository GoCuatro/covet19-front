import { LoginResponse } from 'types/LoginResponse';

export interface LoginResWrapper {
  response: LoginResponse | null,
  status: number
}
