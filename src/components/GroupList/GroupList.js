// @flow
import React, { useState, useEffect } from 'react';
import { Card, Image, Dimmer, Loader } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

import { dummyFetchGroups } from '../../api/groups';

type Props = {
  countryId: string,
};

const GroupList = (props: Props) => {
  const { countryId } = props;
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const allGroups = await dummyFetchGroups();
        setGroups(
          allGroups.filter(
            g => countryId === g['country_code (iso 3661-alpha2)'].toLowerCase()
          )
        );
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    fetchData();
  }, [countryId]);

  return (
    <>
      {loading && (
        <Dimmer>
          <Loader />
        </Dimmer>
      )}

      {!loading && !!groups.length && (
        <Card.Group>
          {groups.map(g => {
            // TODO: Remove demo id
            const demoGroupID = 1;
            const { 'group name': groupName, description } = g;

            return (
              <Card onClick={() => history.push(`/group/${demoGroupID}`)}>
                {/* <Link to={`/group/${demoGroupID}`} key={groupName}> */}
                <Image src="https://picsum.photos/800/600" />
                <Card.Content>
                  <Card.Header>{groupName}</Card.Header>
                  {/* <Card.Meta>{description}</Card.Meta> */}
                  <Card.Description>{description}</Card.Description>
                </Card.Content>
                {/* </Link> */}

                {/* <Card.Content extra>
                    <Button primary>View</Button>
                  </Card.Content> */}
              </Card>
            );
          })}
        </Card.Group>
      )}
    </>
  );
};

export default GroupList;
