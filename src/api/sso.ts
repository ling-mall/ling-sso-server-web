import { Result } from '#/axios'
import { defHttp } from '@/utils/http/axios'

export const getRedirectUrl = (params: { client: string; redirect: string }) => {
  console.log(params)

  return defHttp.get<Result>(
    { url: '/account/sso/getRedirectUrl', params },
    { isTransformResponse: false }
  )
}
export const doLogin = (userInfo) => {
  return defHttp.post<Result>(
    { url: '/account/sso/doLogin', data: userInfo },
    { isTransformResponse: false }
  )
}
