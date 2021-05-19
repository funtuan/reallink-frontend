import { api } from '../api/instance'

export const findOne = async () => {
  const res = await api ({
    method: 'get',
    url: 'pem'
  })
  
  return res.data
}