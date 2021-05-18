import { api } from '../api/instance'

export const upload = async (blob) => {
  var formData = new FormData();
  formData.append("file", blob, 'xxx.pdf');
  
  const res = await api ({
    method: 'post',
    url: '/pdf',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  
  return res.data
}
