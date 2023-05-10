import { type ResponseData } from 'backend/handlers/types'
import { type MyMovie } from 'backend/models/MyMovie'
import axios, { type CancelToken, type AxiosRequestConfig } from 'axios'

export const uploadFileRequest = async (
	file: File,
	fieldname: string,
	setProgress: (percent: number) => void,
	setCancelTokenSourceRef: (cancel: any) => void,
	setUploadFailed: (failed: boolean) => void,
	reset: () => void
): Promise<string> => {
	const getCancelToken = (): CancelToken => {
		const cancelTokenSource = axios.CancelToken.source()
		setCancelTokenSourceRef(cancelTokenSource)
		return cancelTokenSource.token
	}

	const formData = new FormData()
	formData.append(fieldname, file)

	const config: AxiosRequestConfig = {
		headers: { 'content-type': 'multipart/form-data' },
		onUploadProgress: (progressEvent) => {
			const percentCompleted = Math.round((progressEvent.loaded * 100) / (progressEvent.total as number))
			setProgress(percentCompleted)
		},
		cancelToken: getCancelToken()
	}

	try {
		const response = await axios.post('/api/upload-movie-image', formData, config)
		return response.data.data.imagePath
	} catch (error) {
		if (axios.isCancel(error)) reset()
		else setUploadFailed(true)
		throw new Error()
	}
}

export const uploadMovie = async (movie: MyMovie): Promise<ResponseData> => {
	const config: AxiosRequestConfig = {
		headers: { 'content-type': 'application/json' }
	}
	try {
		const response = await axios.post('/api/movies', movie, config)
		return response
	} catch (error) {
		console.log(error)
		throw new Error()
	}
}

export const updateMovie = async (movie: MyMovie): Promise<ResponseData> => {
	const config: AxiosRequestConfig = {
		headers: { 'content-type': 'application/json' }
	}
	try {
		const response = await axios.patch('/api/movies', movie, config)
		return response
	} catch (error) {
		console.log(error)
		throw new Error()
	}
}
