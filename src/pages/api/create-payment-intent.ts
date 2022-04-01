// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../common/server/stripe'

type Response = {
  clientSecret: string
}

export default async (
  request: NextApiRequest,
  response: NextApiResponse<Response>
) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 5000,
    currency: 'gbp',
    automatic_payment_methods: {
      enabled: true,
    },
    meta_data: {
      email: request.body.email,
    },
  })

  response.send({
    clientSecret: paymentIntent.client_secret,
  })
}
