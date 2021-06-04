import { CommonUser } from './CommonUser';

export interface LoginResponse {
  token: string,
  user: CommonUser
}
