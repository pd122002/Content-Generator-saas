import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center'>
        <div className='flex gap-2 border rounded-md items-center p-2 max-w-lg'>
        <Search/>
        <input type='text' placeholder='Search...' className='outline-none'></input>
    </div>
    <div>
        <h2 className='bg-primary border rounded-xl p-1 text-white'>🔥Join membership for just ₹ 499 </h2>
    </div>
    </div>
  )
}

export default Header