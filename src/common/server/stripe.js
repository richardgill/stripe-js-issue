import stripeRaw from 'stripe'

export const stripe = stripeRaw(process.env.STRIPE_SECRET_KEY)
