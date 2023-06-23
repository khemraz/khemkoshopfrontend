import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React, { useEffect, useState } from 'react'
import { getStripeKey } from '../api/paymentApi'
import Payment from './Payment'

const PaymentComponent = () => {

    const [stripeApiKey,setStripeApiKey]=useState('')

    useEffect(()=>{
            getStripeKey()
            .then(data=>setStripeApiKey(data.STRIPE_API_KEY))
    },[])
  return (
    <div>{
        stripeApiKey &&
        <Elements stripe={loadStripe(stripeApiKey)}>
            <Payment/>
        </Elements>
        }
        
    </div>
  )
}

export default PaymentComponent