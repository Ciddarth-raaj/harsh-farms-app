import API from '../util/api';
import constants from '../Constants/api';

const wishlist = {
  add: product_id =>
    new Promise(function (resolve, reject) {
      API.post(
        '/wishlist',
        {product_id: product_id},
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
  get: () =>
    new Promise(function (resolve, reject) {
      API.get('/wishlist', {
        headers: {
          'x-access-token': global.accessToken,
        },
      })
        .then(async res => {
          if (res.status === 200) {
            resolve(wishlist.format(res.data));
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
        cart_id: d.cart_id,
        product_id: d.product_id,
        product_name: d.product_name,
        qty: d.qty,
        image: d.image,
        original_price: parseFloat(d.original_price),
        selling_price: parseFloat(d.selling_price),
        available_stock: d.available_stock,
        created_at: d.created_at,
        updated_at: d.updated_at,
      });
    });

    return formatted;
  },
  delete: product_id =>
    new Promise(function (resolve, reject) {
      var axios = require('axios');
      var data = JSON.stringify({product_id: product_id});

      var config = {
        method: 'delete',
        url: constants.BASE_URL + 'wishlist',
        headers: {
          'x-access-token': global.accessToken,
          'Content-Type': 'application/json',
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          reject(error);
        });
    }),
};

export default wishlist;
