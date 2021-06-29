import API from '../util/api';

const cart = {
  add: (product_id, qty) =>
    new Promise(function (resolve, reject) {
      API.post(
        '/cart',
        {product_id: product_id, qty: qty},
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
  //   get: () =>
  //     new Promise(function (resolve, reject) {
  //       API.get('/society')
  //         .then(async res => {
  //           if (res.status === 200) {
  //             resolve(society.format(res.data));
  //           } else {
  //             reject(res.data.msg);
  //           }
  //         })
  //         .catch(err => {
  //           reject(err);
  //         });
  //     }),
  //   format: data => {
  //     const formatted = [];

  //     data.forEach(d => {
  //       formatted.push({
  //         society_id: d.society_id,
  //         society_name: d.society_name,
  //         is_active: d.is_active == '1' ? true : false,
  //         created_at: d.created_at,
  //         updated_at: d.updated_at,
  //       });
  //     });

  //     return formatted;
  //   },
};

export default cart;
