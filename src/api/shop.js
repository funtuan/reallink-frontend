
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
  uuid,
}) => {
  const res = await axios.post(`${configuration('backendHost')}/api/shop/${code}/record`, {
    info,
    goAt,
    uuid,
  })
  return res.data
}

export const durationCount = async ({
  code,
  secret,
  start,
  end,
}) => {
  const res = await axios.get(`${configuration('backendHost')}/api/dashbroad/total`, {
    params:{
      code,
      secret,
      start,
      end,
    }
  })
  return res.data
}

export const todayRecent = async ({
  code,
  secret,
}) => {
  const res = await axios.get(`${configuration('backendHost')}/api/dashbroad/today`, {
    params:{
      code,
      secret,
    }
  })
  return res.data
}