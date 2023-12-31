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
  updateShoppingCart: `update`,
  addShoppingCartProduct: `add_product`,
  deleteShoppingCartProduct: `delete_product`,
  updateShoppingCartProduct: `update_product`,
  order: `order`,
  search: `?search=`,
}

export default apiRoutes
