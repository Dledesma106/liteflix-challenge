import mongoose, { Connection } from 'mongoose'

declare global {
    var mongoose: typeof mongoose
}

export const currentMongoose = global.mongoose ?? new Connection()

if (process.env.NODE_ENV !== 'production') global.mongoose = mongoose