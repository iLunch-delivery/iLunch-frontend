const apiUrl = 'http://localhost:3001'

const apiRoutes = {
  login: `${apiUrl}/users/login/`,
  register: `${apiUrl}/users/signup/`,
  updateProfile: `${apiUrl}/users/update/`,
  getUserFiles: `${apiUrl}/users/files/`,
  listAllJobs: `${apiUrl}/jobs/list/all/`,
  recivedOffers: `${apiUrl}/jobs/list/user/`,
  createJob: `${apiUrl}/jobs/new/`,
  getJob: `${apiUrl}/jobs/info/`,
  getRestaurant: `${apiUrl}/restaurants/`,
  getSearch: `${apiUrl}/restaurants/?search=`,
  getShoppingCart: `${apiUrl}/shopping-cart/`,
  addProduct: `add_product`,
  deleteProduct: `delete_product`,
}

export default apiRoutes
