
import axios from 'axios';
import configuration from '@/configuration';

export const findOne = async () => {
  const res = await axios.get(`${configuration('backendHost')}/api/pem`)
  return res.data
}