'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type {
  JobOfferInfoProps,
  JobsReceivedContextInterface
} from '@/config/interfaces'

const JobsReceivedContext = createContext<JobsReceivedContextInterface>({
  jobsReceived: [],
  setJobsReceived: () => {}
})

export const JobsReceivedProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [jobsReceived, setJobsReceived] = useState<JobOfferInfoProps[]>([])
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
