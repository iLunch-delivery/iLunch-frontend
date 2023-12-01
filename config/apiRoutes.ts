const apiUrl = 'http://localhost:3001'

const apiRoutes = {
  login: `${apiUrl}/users/login/`,
  register: `${apiUrl}/users/signup/`,
  listAllJobs: `${apiUrl}/jobs/list/all`
}

export default apiRoutes
