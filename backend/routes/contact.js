import { Router } from 'express'
import Contact from '../models/Contact.js'

const router = Router()

router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, service, details } = req.body
    if (!firstName || !lastName || !email || !service || !details) {
      return res.status(400).json({ error: 'Missing required fields' })
    }
    const contact = await Contact.create({ firstName, lastName, email, phone, service, details })
    res.status(201).json({ message: 'Message received! We will respond within 24 hours.', id: contact._id })
  } catch (err) {
    res.status(500).json({ error: 'Server error. Please try again.' })
  }
})

router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json(contacts)
  } catch (err) {
    res.status(500).json({ error: 'Unable to load messages.' })
  }
})

export default router
