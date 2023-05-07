import mongoose from 'mongoose'

const MONGODB_URI: string = process.env.MONGO_URI ?? ''
if (MONGODB_URI.length < 1) {
	throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

export async function dbConnect(): Promise<any> {
	const opts = {
		bufferCommands: false
	}
	await mongoose.connect(MONGODB_URI, opts)
}

export async function dbDisconnect(): Promise<void> {
	await mongoose.disconnect()
}
