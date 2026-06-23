// 인증 API - 로그인, 회원가입 요청을 담당
import instance from '@/lib/axios'

export async function signIn({email, password}) {
  const res = await instance.post('/auth/signIn', {email, password});
  return res.data;
}

export async function signUp({email, nickname, password, passwordConfirmation}) {
  const res = await instance.post('/auth/signUp', {email, nickname, password, passwordConfirmation});
  return res.data;
}