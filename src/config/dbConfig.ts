import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async () => {
  try {
    const uri = `${process.env.MONGODB_URI}/${process.env.MONGO_DB}`
    await mongoose.connect(uri as string)
    console.log('MongoDB running on', process.env.PORT)
  } catch (err: any) {
    console.error(err.message)
    process.exit(1)
  }
}

export default connectDB
