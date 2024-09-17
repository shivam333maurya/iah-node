import { Router } from 'express'
import { getUsers, createUser, loginUser } from '../controllers/userController'

const router = Router()

router.post('/sign-up', createUser)
router.post('/login', loginUser)
router.get('/users', getUsers)

export default router
