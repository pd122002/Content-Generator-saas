import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({ searchInput }: any) {
  return (
    <div className='p-10 flex flex-col justify-center items-center text-white bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600'>
      <h2 className='text-3xl font-bold'>Browse All Template</h2>
      <p>what would you like to create today?</p>
      <div className='w-full flex items-center justify-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%]'>
          <Search className='text-primary' />
          <input type='text' placeholder='seach'
            className='bg-transparent outline-none text-black'
            onChange={(e) => searchInput(e.target.value)}></input>
        </div>
      </div>
    </div>
  )
}

export default SearchSection