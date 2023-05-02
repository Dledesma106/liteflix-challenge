import mongoose from 'mongoose'

const MONGODB_URI: string = process.env.MONGO_URI ?? ''
if (MONGODB_URI.length < 1) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (cached === undefined) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect (): Promise<any> {
  if (cached.conn !== undefined) {
    return cached.conn
  }

  if (cached.promise === undefined) {
    const opts = {
      bufferCommands: false
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect
