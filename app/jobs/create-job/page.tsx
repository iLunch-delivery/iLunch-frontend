import apiRoutes from '@/config/apiRoutes'
import { jobImages } from '@/config/data/jobs'
import React from 'react'

export const page = () => {
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const newJob = {
      _id: formData.get('jobId'),
      restaurantId: formData.get('restaurantId'),
      imageURL: jobImages[Math.floor(Math.random() * jobImages.length)],
      title: formData.get('title'),
      description: formData.get('description'),
      offerTime: formData.get('offerTime'),
      offerSalary: formData.get('offerSalary')
    }

    const response = await fetch(apiRoutes.createJob, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    const responseJson = await response.json()
    if (response.status !== 201) {
      alert(responseJson.message)
      return
    }
    console.log(responseJson)
    alert('Oferta creada con exito')
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          void handleOnSubmit(e)
        }}
      >
        <input type='number' id='jobId' name='jobId' />
        <input type='number' id='restaurantId' name='restaurantId' />
        <input type='text' id='title' name='title' />
        <input type='text' id='description' name='description' />
        <input type='text' id='offerTime' name='offerTime' />
        <input type='number' id='offerSalary' name='offerSalary' />
        <button type='submit'>Crear oferta</button>
      </form>
    </div>
  )
}
