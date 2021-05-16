import axios from 'axios';
import configuration from '@/configuration';

export const upload = async (blob) => {
  var formData = new FormData();
  formData.append("file", blob, 'xxx.pdf');
  const res = await axios.post(`${configuration('backendHost')}/api/pdf`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return res.data
}
