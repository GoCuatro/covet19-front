import { CommonUser } from 'types/CommonUser';
export interface LoginResponse{
    token: string,
    user: CommonUser
}