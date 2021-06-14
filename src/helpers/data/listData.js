import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getList = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/list.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const sitesArray = Object.values(response.data);
      resolve(sitesArray);
      // console.warn('getList', response.data);
    })
    .catch((error) => reject(error));
});

const createList = (list, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/resourcelist.json`, list)
    .then((response) => {
      const body = { listID: response.data.name, userID: uid };
      axios.patch(`${dbUrl}/resourcelist/${response.data.name}.json`, body);
      getList(uid).then((listArray) => resolve(listArray))
        .catch((error) => reject(error));
    });
});

// const addSite = (site, uid) => new Promise((resolve, reject) => {
//   axios.post(`${dbUrl}/list.json`, site)
//     .then((response) => {
//       const body = { firebaseKey: response.data.name };
//       axios.patch(`${dbUrl}/list/${response.data.name}.json`, body);
//       getList(uid).then((listArray) => resolve(listArray))
//         .catch((error) => reject(error));
//     });
// });

export { createList, getList };
