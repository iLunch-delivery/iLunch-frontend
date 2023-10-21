'use client'

import { createContext, useContext, useState } from 'react'
import type { JobsReceivedContextInterface } from '@/config/interfaces'
import { JobReceivedInfoProps } from '@/config/interfaces'
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
  const [jobsReceived, setJobsReceived] = useState(Array<JobReceivedInfoProps>)

  return (
    <JobsReceivedContext.Provider value={{ jobsReceived, setJobsReceived }}>
      {children}
    </JobsReceivedContext.Provider>
  )
}

export const useJobsReceived = () => {
  return useContext(JobsReceivedContext)
}
