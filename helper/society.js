import API from '../util/api';

const society = {
  get: () =>
    new Promise(function (resolve, reject) {
      API.get('/society')
        .then(async res => {
          if (res.status === 200) {
            resolve(society.format(res.data));
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
        society_id: d.society_id,
        society_name: d.society_name,
        is_active: d.is_active == '1' ? true : false,
        created_at: d.created_at,
        updated_at: d.updated_at,
      });
    });

    return formatted;
  },
  // create: (data) =>
  // 	new Promise(function (resolve, reject) {
  // 		API.post("/category", data, {
  // 			headers: {
  // 				"x-access-token": global.config.accessToken,
  // 			},
  // 		})
  // 			.then(async (res) => {
  // 				if (res.status === 200) {
  // 					resolve(res.data);
  // 				} else {
  // 					reject(res);
  // 				}
  // 			})
  // 			.catch((err) => {
  // 				reject(err);
  // 			});
  // 	}),
  // update: (data) =>
  // 	new Promise(function (resolve, reject) {
  // 		API.patch("/category", data, {
  // 			headers: {
  // 				"x-access-token": global.config.accessToken,
  // 			},
  // 		})
  // 			.then(async (res) => {
  // 				if (res.status === 200) {
  // 					resolve(res.data);
  // 				} else {
  // 					reject(res);
  // 				}
  // 			})
  // 			.catch((err) => {
  // 				reject(err);
  // 			});
  // 	}),
};

export default society;
