import { Router } from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const router = Router()

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' })
    }

    const normalizedEmail = email.trim().toLowerCase()
    const user = await User.findOne({ email: normalizedEmail })

    let validUser = null
    let isMatch = false

    if (user) {
      validUser = user
      isMatch = await user.comparePassword(password)
    } else if (
      process.env.ADMIN_EMAIL &&
      process.env.ADMIN_PASSWORD &&
      normalizedEmail === process.env.ADMIN_EMAIL.trim().toLowerCase() &&
      password === process.env.ADMIN_PASSWORD
    ) {
      validUser = {
        _id: 'env-admin',
        email: process.env.ADMIN_EMAIL.trim().toLowerCase(),
        name: 'Admin'
      }
      isMatch = true
    }

    if (!validUser || !isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const token = jwt.sign(
      { id: validUser._id, email: validUser.email, name: validUser.name },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    )

    res.json({ token, user: { name: validUser.name, email: validUser.email } })
  } catch {
    res.status(500).json({ error: 'Server error' })
  }
})

export default router
