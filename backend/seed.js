import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from './models/User.js'

dotenv.config()

async function seed() {
  await mongoose.connect(process.env.MONGO_URI)
  console.log('MongoDB connected')

  const existing = await User.findOne({ email: process.env.ADMIN_EMAIL })
  if (existing) {
    console.log('Admin user already exists')
    await mongoose.disconnect()
    return
  }

  await User.create({
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
    name: 'Admin'
  })

  console.log('Admin user created:')
  console.log(`  Email: ${process.env.ADMIN_EMAIL}`)
  console.log(`  Password: ${process.env.ADMIN_PASSWORD}`)
  await mongoose.disconnect()
}

seed().catch(err => {
  console.error(err)
  process.exit(1)
})
