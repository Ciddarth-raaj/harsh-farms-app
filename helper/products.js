import API from '../util/api';

const products = {
  get: filterData =>
    new Promise(function (resolve, reject) {
      let filterUrl = products.getFilterUrl(filterData);
      API.get('/product?' + filterUrl)
        .then(async res => {
          if (res.status === 200) {
            resolve(products.format(res.data));
          } else {
            reject(res.data.msg);
          }
        })
        .catch(err => {
          reject(err);
        });
    }),
  getFilterUrl: filter => {
    if (filter == undefined) {
      return '';
    }

    let filterUrl = '';

    if (filter.categories !== undefined && filter.categories.length > 0) {
      filter.categories.forEach(
        (b, i) => (filterUrl += '&category_ids[' + i + ']=' + b),
      );
    }

    if (filter.subcategories !== undefined && filter.subcategories.length > 0) {
      filter.subcategories.forEach(
        (b, i) => (filterUrl += '&subcategory_ids[' + i + ']=' + b),
      );
    }

    return filterUrl;
  },
  format: data => {
    const formatted = [];

    data.forEach(d => {
      formatted.push({
        product_id: d.product_id,
        product_name: d.product_name,
        category_id: d.category_id,
        category_name: d.category_name,
        subcategory_id: d.subcategory_id,
        subcategory_name: d.subcategory_name,
        image: d.image,
        original_price: parseFloat(d.original_price),
        selling_price: parseFloat(d.selling_price),
        available_stock: d.available_stock,
        total_stock: d.total_stock,
        batch_tag: d.batch_tag,
        is_active: d.is_active == '1' ? true : false,
        created_at: d.created_at,
        updated_at: d.updated_at,
      });
    });

    return formatted;
  },
};

export default products;
