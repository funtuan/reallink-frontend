import axios from 'axios'
import configuration from '../configuration'

export const api = axios.create({
  baseURL: `${configuration('backendHost')}/api`,
})

export const shop = axios.create({
  baseURL: `${configuration('backendHost')}/api/shop`,
})

export const dashborad = axios.create({
  baseURL: `${configuration('backendHost')}/api/dashbroad`,
})

