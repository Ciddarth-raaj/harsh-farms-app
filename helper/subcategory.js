import API from '../util/api';

const subcategory = {
  get: category_id =>
    new Promise(function (resolve, reject) {
      API.get(
        '/subcategory?' +
          (category_id != undefined ? 'category_id=' + category_id : ''),
      )
        .then(async res => {
          if (res.status === 200) {
            resolve(subcategory.format(res.data));
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
        subcategory_id: d.subcategory_id,
        subcategory_name: d.subcategory_name,
        category_id: d.category_id,
        category_name: d.category_name,
        is_active: d.is_active == '1' ? true : false,
        created_at: d.created_at,
      });
    });

    return formatted;
  },
};

export default subcategory;
