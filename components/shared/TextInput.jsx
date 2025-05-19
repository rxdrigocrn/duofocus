import React from 'react'

const TextInput = ({
  label,
  name,
  type = 'text',
  placeholder,
  register,
  error,
  colorText = 'text-gray-700',
  readOnly = false,  
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className={`text-sm font-medium ${colorText}`}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        readOnly={readOnly}  
        className={`px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 
          ${error ? 'border-red-500' : 'border-gray-300'}
          ${readOnly ? 'cursor-not-allowed opacity-50' : ''}
        `}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  )
}

export default TextInput
