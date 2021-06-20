import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getList } from './listData';

const dbUrl = firebaseConfig.databaseURL;
const apiUrl = `https://data.nashville.gov/resource/797j-5xh2.json?$$app_token=${firebaseConfig.appToken}`;
// const headers = {
//   Host: 'data.seattle.gov',
// Accept: 'application/json',
// X-App-Token: {appToken}
// }

const getAllSites = () => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}`)
    .then((response) => {
      const sitesArray = Object.values(response.data);
      resolve(sitesArray);
    })
    .catch((error) => reject(error));
});

const addSite = (site, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/resourcelist.json`, site)
    .then((response) => {
      const body = { listID: response.data.name, uid };
      axios.patch(`${dbUrl}/resourcelist/${response.data.name}.json`, body);
      getList(uid).then((listArray) => resolve(listArray))
        .catch((error) => reject(error));
    });
});

export {
  getAllSites,
  addSite
};
