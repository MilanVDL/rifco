import Link from 'next/link'
import React from 'react'

const Button = () => {
  return (
    <button className="bg-primary text-white px-6 py-2 rounded-full font-bodyFont font-semibold">
        <Link href="/contact">Contact</Link>
    </button>
  )
}

export default Button