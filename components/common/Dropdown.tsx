import type { DropdownProps } from '@/config/interfaces'
import React, { useState } from 'react'

export default function Dropdown({
  options,
  handleSelectOption,
  defaultValue
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(defaultValue)

  return (
    <>
      <button
        id='dropdownDefaultButton'
        data-dropdown-toggle='dropdown'
        className='border border-gray-300 font-medium w-full rounded-full text-sm p-2.5 text-center inline-flex items-center justify-between'
        type='button'
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        {selectedOption}
        <svg
          className='w-2.5 h-2.5 ml-2.5'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 10 6'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m1 1 4 4 4-4'
          />
        </svg>
      </button>

      <div
        id='dropdown'
        className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul
          className='py-2 text-sm text-gray-700'
          aria-labelledby='dropdownDefaultButton'
        >
          {options.map((option, key) => (
            <li key={`dropdown-opt-${key}`}>
              <p
                className='block px-4 py-2 hover:bg-gray-200 cursor-pointer'
                onClick={() => {
                  setSelectedOption(option)
                  handleSelectOption(option)
                  setIsOpen(false)
                }}
              >
                {option}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
