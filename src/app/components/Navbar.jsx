import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <>
        <main className='flex justify-between itemc p-4 z-[100] w-full absolute'>
            <Link href={'/'} className='text-red-600 text-2xl md:text4xl font-bold cursor-pointer'>NETFLIX</Link>
            <div>
                <button className='text-white pr-4'>Sign In</button>
                <button className='bg-red-600 px-4 py-1 md:px-6 md:py-2 rounded cursor-pointer'>Sign Up</button>
            </div>
        </main>
    </>
  )
}
