'use client'
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({ value }: { value: number }) => {
  return (
    <div className="w-full">
      <CountUp end={value} prefix="$" decimal="," decimals={2} />
    </div>
  )
}
export default AnimatedCounter
