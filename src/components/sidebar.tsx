"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const SidePanel: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Side Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-600 text-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 font-bold text-xl border-b border-blue-500">
          NoTes
        </div>
        <ul className="space-y-4 p-4">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SidePanel
