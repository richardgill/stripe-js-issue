import React, { useState, useEffect } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import type { NextPage } from 'next'
import Head from 'next/head'
import CheckoutForm from 'src/components/checkoutForm'
import { getStripe } from 'src/common/client/stripe'

const Payment: NextPage = () => {
  const [clientSecret, setClientSecret] = useState(null)
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    ;(async () => {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
      const { clientSecret } = await response.json()
      setClientSecret(clientSecret)
    })().catch(console.error)
  }, [])
  if (!clientSecret) {
    return <div>Loading...</div>
  }
  return (
    <Elements
      options={{
        clientSecret: clientSecret,
        appearance: { theme: 'stripe' },
      }}
      stripe={getStripe()}
    >
      <CheckoutForm />
    </Elements>
  )
}

export default Payment
