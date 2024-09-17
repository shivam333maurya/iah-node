import { Request, Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
interface CustomRequest extends Request {
  user?: string | JwtPayload
}
const authMiddleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction,
) => {
  // Get the token from the authorization header
  const token = req.header('Authorization')?.split(' ')[1]

  // Check if the token exists
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' })
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string)

    // Attach the user information to the request object
    req.user = decoded

    next()
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' })
  }
}

export default authMiddleware
