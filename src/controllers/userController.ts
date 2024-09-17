import { Request, Response } from 'express'
import User from '../models/userModel'
import jwt from 'jsonwebtoken'

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err: any) {
    res.status(500).json({ message: err.message })
  }
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, phone } = req.body
    const user = new User({ name, email, phone })
    console.log({ name, email, phone })
    const savedUser = await user.save()
    res.status(201).json(savedUser)
  } catch (err: any) {
    res.status(400).json({ message: err.message })
  }
}

export const loginUser = (req: Request, res: Response) => {
  const user = { id: 1, name: 'John Doe' } // Example user data

  // Generate a JWT token
  const token = jwt.sign(user, process.env.JWT_SECRET as string, {
    expiresIn: '1h',
  })

  res.json({ token })
}
