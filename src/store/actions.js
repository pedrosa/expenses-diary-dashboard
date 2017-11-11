import axios from 'axios'
const AUTH_URL = 'http://localhost:5000/v1/login'

export default {
  login: (context, credentials) => {
    return new Promise((resolve, reject) => {
      axios.post(AUTH_URL, {
        ...credentials
      })
        .then((response) => {
          let email = response.data.email
          let userId = response.data.user_id
          context.commit('login', {
            email: email,
            userId: userId
          })
          resolve()
        })
        .catch((err) => {
          reject(err.response.data)
        })
    })
  }

}
