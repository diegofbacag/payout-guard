'use client'

import { Icon } from '@phosphor-icons/react'
import { useState } from 'react'

interface DropzoneProps {
  title: string
  description: string
  buttonLabel: string
  icon: Icon
}

export const Dropzone = ({
  title,
  description,
  buttonLabel,
  icon: Icon,
}: DropzoneProps) => {
  const [fileName, setFileName] = useState(null)
  return (
    <div className="flex flex-col">
      <div className="mb-2">
        {/* <p>Selecciona tu proveedor: PedidosYa</p> */}
      </div>
      <div className="group flex flex-col items-center justify-center border-2 border-dashed border-[#e63746]/30 hover:border-[#e63746] bg-gray-100 rounded-xl p-10 transition-all cursor-pointer">
        <div className="w-14 h-14 bg-[#e63746]/10 text-red-500 rounded-full flex items-center justify-center mb-4">
          <Icon size={28} />
        </div>

        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        {fileName ? (
          <p className="text-sm text-[#e63746] font-medium mt-2">{fileName}</p>
        ) : (
          <p className="text-sm text-slate-500 text-center mt-2 px-4">
            {description}
          </p>
        )}
        <button
          className="mt-4 px-4 py-2 text-slate-700 bg-[#e63746] text-white text-sm font-bold rounded-lg cursor-pointer"
          onClick={(e) => {}}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  )
}
