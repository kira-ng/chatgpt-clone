import React from 'react'
import NewChat from './NewChat'

function SideBar() {
  return (
    <div className="flex flex-col p-2 h-screen">
      <div className="flex-1">
        <NewChat />

        <div>{/* ModelSelection */}</div>

        {/* Map through the ChatRows */}
      </div>
    </div>
  )
}

export default SideBar
