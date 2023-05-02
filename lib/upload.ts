import axios, { type AxiosRequestConfig } from 'axios'

import { type ApiResponse } from 'backend/handlers/types'

export const uploadFileRequest = async (formData: FormData): Promise<ApiResponse<string[]>> => {
  const config: AxiosRequestConfig = {
    headers: { 'content-type': 'multipart/form-data' },
    validateStatus: (status) => true
  }
  const response = await axios.post('/api/upload-movie', formData, config)

  return response.data
}
