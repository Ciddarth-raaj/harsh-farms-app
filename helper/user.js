import API from '../util/api';

const user = {
  register: data =>
    new Promise(function (resolve, reject) {
      API.post('/user/register', data)
        .then(async res => {
          if (res.status === 200) {
            resolve(res.data);
          } else {
            reject(res);
          }
        })
        .catch(err => {
          reject(err);
        });
    }),
  login: (username, password) =>
    new Promise(function (resolve, reject) {
      API.post('/user/login', {
        account_name: username,
        password: password,
        type: '1',
      })
        .then(async res => {
          if (res.status === 200) {
            resolve(res.data);
          } else {
            reject(res);
          }
        })
        .catch(err => {
          reject(err);
        });
    }),
  getDetails: () =>
    new Promise(function (resolve, reject) {
      API.get('/user/details', {
        headers: {
          'x-access-token': global.accessToken,
        },
      })
        .then(async res => {
          if (res.status === 200) {
            resolve(res.data);
          } else {
            reject(res);
          }
        })
        .catch(err => {
          reject(err);
        });
    }),
  updatePassword: (current_password, new_password) =>
    new Promise(function (resolve, reject) {
      API.post(
        '/user/update-password',
        {current_password: current_password, new_password: new_password},
        {
          headers: {
            'x-access-token': global.accessToken,
          },
        },
      )
        .then(async res => {
          if (res.status === 200) {
            resolve(res.data);
          } else {
            reject(res);
          }
        })
        .catch(err => {
          reject(err);
        });
    }),
  update: data =>
    new Promise(function (resolve, reject) {
      API.patch('/user', data, {
        headers: {
          'x-access-token': global.accessToken,
        },
      })
        .then(async res => {
          if (res.status === 200) {
            resolve(res.data);
          } else {
            reject(res);
          }
        })
        .catch(err => {
          reject(err);
        });
    }),
};

export default user;
