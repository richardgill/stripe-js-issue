import { Stripe, loadStripe } from '@stripe/stripe-js'

let stripePromise

export const getStripe = () => {
  if (typeof window === 'undefined') {
    return null
  }
  console.log('getStripe')
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  }
  return stripePromise
}
