import UserInfoTable from '@/components/features/UserInfoTable'
import { userFiles } from '@/config/data/userInfo'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function UserProfile() {
  return (
    <main className='p-0'>
      <button className='absolute top-16 right-8 rounded-full bg-[#FB5A3E] text-lg py-2 px-9 w-fit text-white'>
        Editar perfil
      </button>
      <section
        id='banner-section'
        className='w-full bg-gray-300 pt-16 pb-8 px-8 flex flex-col justify-center items-center'
      >
        <FontAwesomeIcon
          icon={faCircleUser}
          className='h-48 text-gray-500 bg-slate-50 rounded-full my-4'
        />
        <h1 className='text-4xl font-semibold my-2'>User name</h1>
        <p className='my-2 w-1/2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, in!
          Perspiciatis expedita animi, facere ipsum natus quasi quo asperiores
          veritatis officiis debitis sunt libero iste aliquam molestiae sint
          veniam eum.
        </p>
      </section>
      <section id='info-section' className='flex mx-8 my-16'>
        <div className='flex-1 mx-4'>
          <h2 className='text-2xl font-semibold mb-4'>Tus datos</h2>
          <div className='flex shadow-md rounded-xl p-4 h-full'>
            <UserInfoTable />
          </div>
        </div>
        <div className='flex-1 mx-4'>
          <h2 className='text-2xl font-semibold mb-4'>Tus archivos</h2>
          <div className='flex flex-col shadow-md rounded-xl p-4 h-full'>
            <h3 className='text-lg font-semibold mb-8'>Archivos adjuntos</h3>
            <table className='w-full table-fixed'>
              <tbody>
                {userFiles.map((file, key) => (
                  <tr
                    key={`user-file${key}`}
                    className='border-b border-b-gray-300 h-12'
                  >
                    <td className='font-medium w-36'>{file.name}</td>
                    <td className=''>{file.description}</td>
                    <td className='font-medium w-16 text-center'>
                      {file.weight}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  )
}

export default UserProfile
