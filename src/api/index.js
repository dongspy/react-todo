// import { AxiosProvider, Get } from 'react-axios'
import axios from 'axios'


const axiosProp = axios.create({
    baseURL: '/',
    timeout: 2000,
    headers: { 'accept': 'application/json' },
  })

export async function getStatus() {
    const response = await axiosProp.get("/engine/v1/status");
    return response.data;
  }

export async function getQuery(){
   
    const response = await axiosProp.get("/api/workflows/v1/query");
    return response.data;
}

export async function getVersion(){
   
    const response = await axiosProp.get("/engine/v1/version");
    return response.data;
}

export default axiosProp;
