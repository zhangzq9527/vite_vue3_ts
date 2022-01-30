import { post } from '../../http'

enum URL {
  login = '/user/login',
}
const login = async (data: any) => post(URL.login, data)

export default { login }
