import { User } from 'next-auth'
import { api } from '../services/api'
import { compare } from 'bcrypt'

type LoginFn = (email: string, password: string) => Promise<User>

export const Login: LoginFn = async (email, password) => {
 const user = await api.user.findFirst({
  where: {
   email,
  }
 });
 if (user && (await compare(password, user.password))) {
  user.password = "";
  return user;
 } else throw new Error("User not Found!")
}