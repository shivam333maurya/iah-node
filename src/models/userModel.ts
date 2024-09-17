import mongoose, { Schema, Document } from 'mongoose'

interface IUser extends Document {
  name: string
  email: string
  phone: number
  createdAt: Date
  updatedAt: Date
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
  },
  {
    timestamps: true, // This enables createdAt and updatedAt fields
  },
)

export default mongoose.model<IUser>('Users', UserSchema)
