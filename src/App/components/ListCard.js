import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  ButtonGroup,
} from 'reactstrap';
import { deleteListSites } from '../../helpers/data/siteData';
import ListForm from './ListForm';
// import { getListByListName } from '../../helpers/data/listData';
// import { getAllListData } from '../../helpers/data/listData';

function ListCard({ user, setListNameArray, ...listNameInfo }) {
  const [editNow, setEditNow] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        console.warn(deleteListSites(listNameInfo.listID, user.uid));
        // deleteList(user.uid).then((response) => (setListNameArray(response)));
        break;
      case 'toggleEdit':
        setEditNow((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <>
       {<h3>{ listNameInfo.listName }</h3> }
     <ButtonGroup>
        <Button color='secondary'
          onClick={() => handleClick('toggleEdit')}>
            {editNow ? 'Close' : 'Edit'}
        </Button>
        {
            editNow && <ListForm
            user={user}
            setListNameArray={setListNameArray}
            {...listNameInfo}
            />
          }

        <Button color='danger'
            onClick={() => handleClick('delete')}>X
        </Button>
      </ButtonGroup>
    </>
  );
}

ListCard.propTypes = {
  user: PropTypes.any,
  setListNameArray: PropTypes.func,
  setListSites: PropTypes.func,
  listNameInfo: PropTypes.object,
};

export default ListCard;
