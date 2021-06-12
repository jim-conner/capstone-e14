import axios from 'axios';
// import firebaseConfig from '../apiKeys';

// const dbUrl = firebaseConfig.databaseURL;
const apiUrl = 'https://data.nashville.gov/resource/797j-5xh2';

const getSites = () => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}`)
    .then((response) => {
      const sitesArray = Object.values(response.data);
      resolve(sitesArray);
    })
    .catch((error) => reject(error));
});

export default getSites;
