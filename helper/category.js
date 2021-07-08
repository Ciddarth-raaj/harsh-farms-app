import API from '../util/api';

const category = {
  get: () =>
    new Promise(function (resolve, reject) {
      API.get('/category')
        .then(async res => {
          if (res.status === 200) {
            resolve(category.format(res.data));
          } else {
            reject(res.data.msg);
          }
        })
        .catch(err => {
          reject(err);
        });
    }),
  format: data => {
    const formatted = [];

    data.forEach(d => {
      formatted.push({
        category_id: d.category_id,
        category_name: d.category_name,
        image: d.image,
        is_active: d.is_active == '1' ? true : false,
        created_at: d.created_at,
        displaySub: false,
        subCategory: [],
      });
    });

    return formatted;
  },
  create: data =>
    new Promise(function (resolve, reject) {
      API.post('/category', data, {
        headers: {
          'x-access-token': global.config.accessToken,
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
  update: data =>
    new Promise(function (resolve, reject) {
      API.patch('/category', data, {
        headers: {
          'x-access-token': global.config.accessToken,
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

export default category;
