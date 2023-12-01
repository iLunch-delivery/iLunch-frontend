const apiUrl = 'http://localhost:3001'

const apiRoutes = {
  login: `${apiUrl}/users/login/`,
  register: `${apiUrl}/users/signup/`,
  updateProfile: `${apiUrl}/users/update/`,
  listAllJobs: `${apiUrl}/jobs/list/all`,
  getUserFiles: `${apiUrl}/users/files/`
}

export default apiRoutes
