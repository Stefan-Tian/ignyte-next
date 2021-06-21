import axios from 'axios';

const API = 'http://dev.ignyte.life/api';

const instance = axios.create({
  baseURL: API,
  withCredentials: true,
});

export default function api<T, U>(
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  data: T
) {
  switch (method) {
    case 'get':
      return instance.get<U>(url, { params: data });
    case 'post':
      return instance.post<U>(url, data);
    case 'put':
      return instance.put<U>(url, data);
    case 'delete':
      return instance.delete<U>(url, { params: data });
    default:
      throw new Error('Invalid method provided!');
  }
}
