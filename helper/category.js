import API from '../util/api';
import SubcategoryHelper from './subcategory';

const category = {
  get: () =>
    new Promise(function (resolve, reject) {
      API.get('/category/subcategory')
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
        subCategory: SubcategoryHelper.format(d.subCategory),
      });
    });

    return formatted;
  },
};

export default category;
