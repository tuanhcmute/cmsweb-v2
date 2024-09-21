import { IApiResponse, IPaginationResponse, IQuery } from '@/types'
import { IUserInfo } from '@/types/user.type'
import { http } from '@/utils'

export async function getUsers(
  params: IQuery
): Promise<IApiResponse<IPaginationResponse<IUserInfo>>> {
  const response = await http.get<IApiResponse<IPaginationResponse<IUserInfo>>>('/users', {
    params
  })
  return response.data
}

export async function getUser(slug: string) {
  const response = await http.get<IApiResponse<IUserInfo>>(`/users/${slug}`)
  return response.data
}
