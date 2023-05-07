import { type NextApiRequest } from 'next'

interface MulterS3File {
	fieldname: string
	originalname: string
	encoding: string
	mimetype: string
	size: number
	bucket: string
	key: string
	acl: string
	contentType: string
	contentDisposition: null
	storageClass: string
	serverSideEncryption: null
	metadata: {
	  fieldname: string
	}
	location: string
	etag: string
	versionId: string
  }

export interface NextConnectApiRequest extends NextApiRequest {
	file: MulterS3File
	filename: string
}

export interface SuccessfulResponse<T> {
	data: T
	error?: never
	statusCode?: number
}
export interface UnsuccessfulResponse<E> {
	data?: never
	error: E
	statusCode?: number
}

export type ApiResponse<T, E = unknown> = SuccessfulResponse<T> | UnsuccessfulResponse<E>
export type ResponseData = ApiResponse<any, string>
