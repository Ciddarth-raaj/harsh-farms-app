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
  get: () =>
    new Promise(function (resolve, reject) {
      API.get('/cart', {
        headers: {
          'x-access-token': global.accessToken,
        },
      })
        .then(async res => {
          if (res.status === 200) {
            resolve(cart.format(res.data));
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
};

export default cart;
