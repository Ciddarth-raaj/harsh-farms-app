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
};

export default user;
