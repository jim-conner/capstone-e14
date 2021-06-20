import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardText,
  CardTitle,
} from 'reactstrap';
import { addSite } from '../../helpers/data/siteData';

function SiteCard({
  user,
  ...siteObj
}) {
  const [siteCardObj, setSiteCardObj] = useState({
    listID: siteObj?.listID || null,
    building: siteObj?.building,
    address: siteObj?.address,
    city: siteObj?.city,
    zip_code: siteObj?.zip_code,
    uid: user.uid || user
  });

  const handleClick = (type) => {
    if (type === 'add') {
      addSite(siteCardObj, user.uid)
        .then((response) => (setSiteCardObj(response)));
    } else if (type === 'delete') {
      console.warn('delete this card');
    } else if (type === 'view') {
      console.warn('you clicked view card button');
    }
  };

  return (
      <Card body
        className='customizedCard'
        key={siteCardObj.building}
      >
        <CardBody>
          <CardTitle tag='h4'>{siteCardObj.building}</CardTitle>
          <CardText tag='h5'>{siteCardObj.address}</CardText>
          <CardText tag='h5'>{siteCardObj.city}, TN {siteCardObj.zip_code}</CardText>
          <ButtonGroup>
            <Button color='primary'
              onClick={() => handleClick('view')}>View Details
            </Button>
            {
              user
                ? <>
                    <Button color='success'
                      onClick={() => handleClick('add')}>
                        Add to List
                    </Button>
                    <Button color='danger'
                      onClick={() => handleClick('delete')}>
                        X
                    </Button>
                  </>
                : ''
            }
          </ButtonGroup>
        </CardBody>
      </Card>
  );
}

SiteCard.propTypes = {
  user: PropTypes.any,
  siteObj: PropTypes.object,
  setSiteCardObj: PropTypes.func
  // setSites: PropTypes.func,
  // site: PropTypes.object,
  // setSite: PropTypes.func,
  // sites: PropTypes.array,
};

export default SiteCard;
