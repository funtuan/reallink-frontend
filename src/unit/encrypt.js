import NodeRSA from 'node-rsa';

export default (publicPem, json) => {
  const key = new NodeRSA(publicPem)
  const encrypted = key.encrypt(JSON.stringify(json), 'base64')

  return encrypted
}