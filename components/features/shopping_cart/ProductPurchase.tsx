'use client'
import { useState } from 'react'
import type { ProductPurchaseProps } from '@/config/interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMoneyCheckDollar,
  faHashtag,
  faPencil,
  faFloppyDisk,
  faXmark
} from '@fortawesome/free-solid-svg-icons'

const StartEdit = () => {
  return (
    <FontAwesomeIcon
      icon={faPencil}
      size='lg'
      style={{ color: '#808080' }}
    />
  )
}

const SaveEdit = () => {
  return (
    <FontAwesomeIcon
      icon={faFloppyDisk}
      size='lg'
      style={{ color: '#808080' }}
    />
  )
}

function ProductPurchase({
  _id,
  imageURL,
  title,
  price,
  units,
  editAction,
  deleteAction
}: ProductPurchaseProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [newUnits, setNewUnits] = useState(units)

  const handleEdit = () => {
    if(isEditing) {
      editAction?.(_id, newUnits)
    }
    setIsEditing(!isEditing)
  }

  return (
    <div className='flex justify-between'>
      <div className='py-4 max-w space-y-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
        <img
          className='block h-16 rounded-md sm:mx-0 sm:shrink-0'
          src={imageURL}
          alt={`Restaurant Product: ${name}`}
        ></img>
        <div className='space-y-4'>
          <div className='space-y-0.5'>
            <p className='text-lg font-semibold'>{title}</p>
            <div className='flex items-center'>
              <FontAwesomeIcon
                icon={faMoneyCheckDollar}
                style={{ color: '#808080' }}
              />
              <p className='inline px-2 text-xs text-slate-500 font-semibold'>
                COP ${price}
              </p>
            </div>
            <div className='flex items-center'>
              <FontAwesomeIcon icon={faHashtag} style={{ color: '#808080' }} />
              <p className='inline px-2 text-xs text-slate-500 font-semibold'>
                x{units} unidades
              </p>
            </div>
          </div>
        </div>
      </div>
      <div 
        className={`flex basis-16 space-x-4 items-center justify-around ${isEditing ? '' : 'hidden'}`}
      >
        <label htmlFor='units'>Unidades</label>
        <input 
          type='number'
          className='w-16'
          min="1"
          max="99"
          value={newUnits}
          onChange={(e) => {
            setNewUnits(Number(e.target.value))
          }}
          disabled={!isEditing}
        />
      </div>
      <div className='flex basis-16 items-center justify-around'>
        <button 
          className='hover:scale-125'
          onClick={handleEdit}
        >
          {isEditing ? <SaveEdit /> : <StartEdit />}
        </button>
        <button 
          className='hover:scale-125'
          onClick={() => {
            deleteAction?.()
          }}
        >
          <FontAwesomeIcon
            icon={faXmark}
            size='lg'
            style={{ color: '#808080' }}
          />
          
        </button>
      </div>
    </div>
  )
}

export default ProductPurchase
