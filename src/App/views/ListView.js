import React, {
  useEffect,
  useState
} from 'react';
import PropTypes from 'prop-types';
// import { Container, Button } from 'reactstrap';
import { getList } from '../../helpers/data/listData';
// import ListCard from '../components/ListCard';
import ListForm from '../components/ListForm';
// import ListCard from '../components/ListCard';

function ListView({ user }) {
  const [listObj, setListObj] = useState({});
  const [siteArray, setSiteArray] = useState([]);

  useEffect(() => {
    getList(user.uid).then((response) => (setSiteArray(response)));
    // need to use Promise.All to get sites with user & ListID
  }, []);

  return (
    <>
    <div>
      <ListForm
        user={user}
        listObj={listObj}
        setListObj={setListObj}
      />
    </div>

    <div>
      {/* need a className for this div ^^ for List + site card map */}
      {/* <ListCard
        user={user}
        listObj={listObj}
        setListObj={setListObj}
      /> */}
      <div className='cardsHolder'>
        {/* {siteArray.map((siteInfo) => (
          console.warn(setSiteArray(siteInfo))
          // pass listInfo.listID instead of just having it as key
          // SiteCard here
        ))} */}
          {<h3>
            { siteArray.length === 0
              ? 'Please Create a List or Browse Service Sites'
              : ''
            }
          </h3>}
      </div>
    </div>
{/* where should I put list card? */}

    </>
  );
}

ListView.propTypes = {
  user: PropTypes.any,
  siteArray: PropTypes.array,
  setSiteArray: PropTypes.func
};

export default ListView;
