
import axios from 'axios';
import configuration from '@/configuration';

export const create = async ({
  name,
  phone,
  address,
  contactName,
  contactPhone,
  contactEmail,
}) => {
  const res = await axios.post(`${configuration('backendHost')}/api/shop`, {
    name,
    phone,
    address,
    contactName,
    contactPhone,
    contactEmail,
  })
  return res.data
}

export const findOne = async (code) => {
  const res = await axios.get(`${configuration('backendHost')}/api/shop/${code}`)
  return res.data
}

export const record = async ({
  code,
  info,
  goAt,
}) => {
  const res = await axios.post(`${configuration('backendHost')}/api/shop/${code}/record`, {
    info,
    goAt,
  })
  return res.data
}