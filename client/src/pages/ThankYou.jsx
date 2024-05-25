import React from 'react'
import { useSelector } from 'react-redux'

export default function ThankYou() {
  const order = useSelector(state => state.order)
  return (
    <div><h3 className='text-center thank-you-title'><span>{order.name}!</span> Thank you for placing your order. Your order number is <span>#{order.orderId}</span>.</h3></div>
  )
}
