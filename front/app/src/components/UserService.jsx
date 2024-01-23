import axios from "axios";

const APIURLLOGIN = "http://localhost:3000/auth/login";
const APIURL = "http://localhost:3000/clientes/";
const token = document.cookie.replace('token=', '')
const cabezera =  {
  "Authorization" : 'Bearer '+ token,
  "Content-Type": "application/json"
   }


const UserService = {
  getAll: async function () {
    try {
      const resp = await axios.get(APIURL,{headers:cabezera});
      console.log(resp.data.body)
      return resp.data;
    } catch (error) {
      return error.data;
    }
  },

  getById: async function (id) {
    try {
      const resp = await axios.get(APIURL + id,{headers:cabezera});
      return resp.data;
    } catch (error) {
      return error.data;
    }
  },
  delete: async function (id) {
    try {
      const resp = await axios.delete(APIURL + id, { headers: cabezera });
      return resp.data.status;
    } catch (error) {
      return error.data;
    }
  },
  update: async function (id, data) {
    try {
      const resp = await axios.put(APIURL + id, JSON.parse(data),{headers:cabezera})
      console.log(resp.data)
    } catch (error) {
      return error.data;
    }
  },

  create: async function (data) {
    try {
      const resp = await axios.post(APIURL, JSON.parse(data),{headers:cabezera});
      console.log(resp.data.status)
      return resp.data.status;
    } catch (error) {
      return error.data;
    }
  },
  login: async function (data) {
    try {
      const resp = await axios.post(APIURLLOGIN, JSON.parse(data))
      console.log(resp.data.body)
      document.cookie = `token = ${resp.data.body}; path=/`
      
    } catch (error) {
      return error.data;
    }
  },
  
};

export default UserService;
