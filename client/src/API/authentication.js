import axios from 'axios';

const tokenName = 'tkid';

class Authentication {
  constructor(user) {
    this.user = user;
    this.localToken = localStorage.getItem(tokenName);
  }

  login = (email, password) =>
    new Promise((resolve, reject) => {
      axios({
        url: '/authRoute/login',
        method: 'post',
        data: {
          email,
          password,
        },
      })
        .then((result) => {
          localStorage.setItem(tokenName, result.data.token);
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    })

    signUp = (email, password) =>
      new Promise((resolve, reject) => {
        axios({
          url: '/authRoute/signup',
          method: 'POST',
          data: { email, password },
        })
          .then((result) => {
            console.log(result);
            localStorage.setItem(tokenName, result.data.token);
            resolve(result);
          })
          .catch((err) => {
            console.log('Error!!!', err);
            reject(err);
          });
      })

  checkToken = () =>
    new Promise((resolve, reject) => {
      const token = this.localToken;
      axios({
        method: 'GET',
        url: '/authRoute/validateToken',
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          if (err) {
            reject(err);
          }
        });
    });
}


export default Authentication;
