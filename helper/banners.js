import API from '../util/api';

const banners = {
  get: () =>
    new Promise(function (resolve, reject) {
      API.get('/banners')
        .then(async res => {
          if (res.status === 200) {
            resolve(banners.format(res.data));
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
        banner_id: d.banner_id,
        url: d.link,
        preference: d.preference,
        is_active: d.is_active == '1' ? true : false,
        created_at: d.created_at,
        updated_at: d.updated_at,
      });
    });

    return formatted;
  },
  create: data =>
    new Promise(function (resolve, reject) {
      API.post('/banners', data, {
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
      API.patch('/banners', data, {
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

export default banners;
