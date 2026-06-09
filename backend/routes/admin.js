import { Router } from 'express'
import auth from '../middleware/auth.js'
import Contact from '../models/Contact.js'

const router = Router()

router.get('/contacts', auth, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 20
    const status = req.query.status || ''
    const search = req.query.search || ''

    const query = {}
    if (status) query.status = status
    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
      ]
    }

    const total = await Contact.countDocuments(query)
    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)

    res.json({ contacts, total, page, pages: Math.ceil(total / limit) })
  } catch {
    res.status(500).json({ error: 'Server error' })
  }
})

router.get('/contacts/:id', auth, async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id)
    if (!contact) return res.status(404).json({ error: 'Not found' })
    res.json(contact)
  } catch {
    res.status(500).json({ error: 'Server error' })
  }
})

router.patch('/contacts/:id', auth, async (req, res) => {
  try {
    const { status, notes } = req.body
    const update = {}
    if (status) update.status = status
    if (notes !== undefined) update.notes = notes
    const contact = await Contact.findByIdAndUpdate(req.params.id, update, { new: true })
    if (!contact) return res.status(404).json({ error: 'Not found' })
    res.json(contact)
  } catch {
    res.status(500).json({ error: 'Server error' })
  }
})

router.delete('/contacts/:id', auth, async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id)
    if (!contact) return res.status(404).json({ error: 'Not found' })
    res.json({ message: 'Deleted' })
  } catch {
    res.status(500).json({ error: 'Server error' })
  }
})

router.get('/stats', auth, async (req, res) => {
  try {
    const total = await Contact.countDocuments()
    const newCount = await Contact.countDocuments({ status: 'new' })
    const readCount = await Contact.countDocuments({ status: 'read' })
    const repliedCount = await Contact.countDocuments({ status: 'replied' })
    const recent = await Contact.find().sort({ createdAt: -1 }).limit(5)

    res.json({ total, new: newCount, read: readCount, replied: repliedCount, recent })
  } catch {
    res.status(500).json({ error: 'Server error' })
  }
})

export default router
