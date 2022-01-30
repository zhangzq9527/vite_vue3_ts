import { get, post } from '../../http'

enum URL {
  login = '/v1/user/login',
}

const login = async (data: any) => post<any>({ url: URL.login, data })

export default { login }
