'use client'

import { FilePlusIcon, Icon, UploadSimpleIcon } from '@phosphor-icons/react'
import React, { useRef, useState } from 'react'
import { uploadFile, UploadFileDto } from '../services/import.service'

interface DropzoneProps {
  title: string
  description: string
  icon: Icon
}

export const Dropzone = ({ title, description, icon: Icon }: DropzoneProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) return

    setSelectedFile(file)
  }

  const handleSubmitFile = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (!selectedFile) return

    await uploadFile(selectedFile)
  }

  return (
    <div className="flex flex-col">
      <div className="mb-2">
        {/* <p>Selecciona tu proveedor: PedidosYa</p> */}
      </div>
      <div
        className="group flex flex-col items-center justify-center border-2 border-dashed border-[#e63746]/30 hover:border-[#e63746] bg-white rounded-xl p-10 transition-all cursor-pointer"
        onClick={() => inputRef.current?.click()}
      >
        <div className="w-14 h-14 bg-[#e63746]/10 text-red-500 rounded-full flex items-center justify-center mb-4">
          <Icon size={28} />
        </div>

        <h3 className="text-lg font-bold text-slate-900">{title}</h3>

        <p className="text-sm text-slate-500 text-center mt-2 px-4 mb-2">
          {description}
        </p>

        <input
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept=".pdf,.xlsx,.csv"
        />
        <div className="flex flex-col w-full gap-3">
          <button
            className="w-full px-4 py-2.5 bg-slate-100 text-slate-700 dark:text-slate-300 rounded-lg font-bold text-sm hover:bg-slate-200 transition-all flex items-center justify-center gap-2 border border-slate-200 cursor-pointer"
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              inputRef.current?.click()
            }}
          >
            <FilePlusIcon size={18} className="text-slate-700" />
            {selectedFile ? 'Archivo Seleccionado: ' : 'Seleccionar Archivo'}
            <span className="text-[#e63746] font-medium">
              {selectedFile && selectedFile.name}
            </span>
          </button>
          <button
            className="w-full px-4 py-2.5 bg-[#e63746] text-white rounded-lg font-bold text-sm shadow-md shadow-[#e63746]/20 hover:bg-[#e63746]/90 transition-all flex items-center justify-center gap-2 cursor-pointer"
            type="button"
            onClick={handleSubmitFile}
          >
            <UploadSimpleIcon size={18} className="text-white" />
            Subir Archivo
          </button>
        </div>
      </div>
    </div>
  )
}
