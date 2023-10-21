'use client'
import type { File } from '@/config/interfaces'
import {
  faCirclePlus,
  faPencil,
  faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function UserFilesTable({
  files,
  isEditing
}: {
  files: File[] | undefined
  isEditing: boolean
}) {
  // Si hay archivos adjuntos mostrar tabla
  // Se controla la edición con la variable isEditing
  if (files !== undefined) {
    return (
      <table className='w-full table-fixed'>
        <tbody>
          {files?.map((file, key) => (
            <tr
              key={`user-file${key}`}
              className='border-b border-b-gray-300 h-12'
            >
              <td className='font-medium w-36'>{file.name}</td>
              <td className='py-4'>{file.description}</td>
              <td className='font-medium w-16 text-center'>{file.weight}</td>
              {isEditing && (
                <td className='font-medium w-16 text-center '>
                  <FontAwesomeIcon
                    icon={faPencil}
                    className='h-4 text-gray-800 mr-4 cursor-pointer'
                  />
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className='h-4 text-gray-800 cursor-pointer'
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
        {isEditing && (
          <tfoot>
            <tr>
              <FontAwesomeIcon
                icon={faCirclePlus}
                className='h-8 text-blue-600 bg-white cursor-pointer m-4'
              />
            </tr>
          </tfoot>
        )}
      </table>
    )
  } else {
    // Si no hay archivos adjuntos mostrar mensaje
    // Se controla la edición con la variable isEditing
    return (
      <>
        <p>No hay archivos adjuntos</p>
        {isEditing && (
          <FontAwesomeIcon
            icon={faCirclePlus}
            className='h-8 text-blue-600 bg-white cursor-pointer w-fit mt-4'
          />
        )}
      </>
    )
  }
}

export default UserFilesTable
