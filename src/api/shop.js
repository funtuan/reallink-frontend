import {shop, dashborad} from '../api/instance'

export const create = async ({
  name,
  phone,
  address,
  contactName,
  contactPhone,
  contactEmail,
}) => {
  const res = await shop ({
    method: 'post',
    url: '/',
    data: {
      name,
      phone,
      address,
      contactName,
      contactPhone,
      contactEmail,
    }
  })

  return res.data
}


export const findOne = async (code) => {
  const res = await shop ({
    method: 'get',
    url: `/${code}`,
  })

  return res.data
}


export const record = async ({
  code,
  info,
  goAt,
  uuid,
}) => {
  const res = await shop ({
    method: 'post',
    url: `/${code}/record`,
    data:{
      info,
      goAt,
      uuid,  
    }
  })

  return res.data
}

// 取得 昨日/本周/本月 總筆數計算
export const durationCount = async ({
  code,
  secret,
  start,
  end,
}) => {
  const res = await dashborad ({
    method: 'get',
    url: '/total',
    params:{
      code,
      secret,
      start,
      end, 
    }
  })

  return res.data
}

// 取得今日最新五筆資料
export const todayRecent = async ({
  code,
  secret,
}) => {
  const res = await dashborad ({
    method: 'get',
    url: '/today',
    params:{
      code,
      secret,
    }
  })

  return res.data
}