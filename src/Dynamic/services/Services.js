import axios from "axios";

const URL = "https://gorest.co.in/public/v2";
const URI = "/users"

function getUsersFromApi() {
  return axios.get(`${URL}${URI}`, {
    headers: {
      Authorization:
        "Bearer b570480fdd257112e2a35414dc1ea4321894d039e061e965a6f361fc360ad979",
    },
  });
}

function addUsersFromApi(data) {
  return axios.post(`${URL}${URI}`, data, {
    headers: {
      Authorization:
        "Bearer b570480fdd257112e2a35414dc1ea4321894d039e061e965a6f361fc360ad979",
    },
  });
}

function editUsersFromApi(id) {
  return axios.get(`${URL}${URI}/${id}`, {
    headers: {
      Authorization:
        "Bearer b570480fdd257112e2a35414dc1ea4321894d039e061e965a6f361fc360ad979",
    },
  });
}


function updateUsersFromApi(id, data) {
  return axios.put(`${URL}${URI}/${id}`, data, {
    headers: {
      Authorization:
        "Bearer b570480fdd257112e2a35414dc1ea4321894d039e061e965a6f361fc360ad979",
    },
  });
}

function deleteUsersFromApi(id) {
  // console.log("URL", URL + '/' + id)
  return axios.delete(`${URL}${URI}/${id}`, {
    headers: {
      Authorization:
        "Bearer b570480fdd257112e2a35414dc1ea4321894d039e061e965a6f361fc360ad979",
    },
  })
}

const UserServices = {
  getUsersFromApi,
  addUsersFromApi,
  editUsersFromApi,
  updateUsersFromApi,
  deleteUsersFromApi
};

export default UserServices;
