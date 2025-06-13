import api from '../plugins/api.ts'
import { toast } from 'react-toastify';


const successfulMsg = () => toast.success("Save successfully!")
const failedMsg = () => toast.error("Save failed!")

export const getMethod = async (endpoint: string) => {
  try {
    const {data} = await api.get(endpoint)
    return data
  } catch (e) {
    console.log(e)
    // const notify = () => toast("Wow so easy!");
  }

  return null
}

export const postMethod = async (endpoint: string, payload: any) => {
  try {
    const {data} = await api.post(endpoint, payload)
    successfulMsg()
    return data
  } catch (e) {
    failedMsg()
  }

  return null
}

export const putMethod = async (endpoint: string, payload: any) => {
  try {
    const {data} = await api.put(endpoint, payload)
    successfulMsg()
    return data
  } catch (e) {
    failedMsg()
  }

  return null
}


export const deleteMethod = async (endpoint: string) => {
  try {
    const {data} = await api.get(endpoint)
    successfulMsg()
    return data
  } catch (e) {
    failedMsg()
  }

  return null
}
