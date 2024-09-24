"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import SearchTemplateSection from './_components/SearchTemplateSection'

function Dashboard() {
  const [onSearchInput, setOnSearchInput] = useState<string>()
  return (
    <div>
      {/* Search section */}
        <SearchSection searchInput={(value:string)=>setOnSearchInput(value)}/>

      {/* Search template section */}
      <SearchTemplateSection onSearchInput={onSearchInput}/>
    </div>
  )
}

export default Dashboard