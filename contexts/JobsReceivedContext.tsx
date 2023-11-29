'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { JobsReceivedContextInterface } from '@/config/interfaces'
import { jobReceivedOffers } from '@/config/data/jobs'

const JobsReceivedContext = createContext<JobsReceivedContextInterface>({
  jobsReceived: jobReceivedOffers,
  setJobsReceived: () => {}
})

export const JobsReceivedProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [jobsReceived, setJobsReceived] = useState(() => {
    const persistJobsReceived = localStorage.getItem('jobsReceived')
    if (persistJobsReceived !== null) {
      const jobsReceived = JSON.parse(persistJobsReceived)
      return jobsReceived
    }
    return jobReceivedOffers
  })

  useEffect(() => {
    localStorage.setItem('jobsReceived', JSON.stringify(jobsReceived))
  }, [jobsReceived])

  return (
    <JobsReceivedContext.Provider value={{ jobsReceived, setJobsReceived }}>
      {children}
    </JobsReceivedContext.Provider>
  )
}

export const useJobsReceived = () => {
  return useContext(JobsReceivedContext)
}
