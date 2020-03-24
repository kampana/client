// @flow
import React, { useState, useEffect } from 'react';
import { Card, Image, Dimmer, Loader, Pagination } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { dummyFetchGroups } from '../../api/groups';

const ListWrap = styled.div`
  min-height: 465px;
  margin-bottom: '2rem';
`;

type Props = {
  countryId: string,
};

const GroupList = (props: Props) => {
  const { countryId } = props;
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();
  const PAGE_SIZE = 12;

  // TODO: Remove when data is paged by API
  const chunk = (array, size) => {
    if (!array) return [];
    const firstChunk = array.slice(0, size); // create the first chunk of the given array
    if (!firstChunk.length) {
      return array; // this is the base case to terminal the recursive
    }
    return [firstChunk].concat(chunk(array.slice(size, array.length), size));
  };
  const pagedGroups = chunk(groups, PAGE_SIZE);

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
        // console.log(error);
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
        <>
          <ListWrap>
            <Card.Group stackable itemsPerRow="4">
              {pagedGroups[currentPage - 1].map(g => {
                // TODO: Remove demo id
                const { 'group name': groupName, description, logo } = g;
                let clampedDescription = description;
                const maxChars = 170;
                if (description.length > maxChars) {
                  clampedDescription = description
                    .slice(0, maxChars)
                    .split(' ');
                  clampedDescription.splice(-1, 1);
                  clampedDescription = clampedDescription.join(' ').concat('…');
                }

                return (
                  <Card
                    onClick={() => history.push(`/group/${groupName}`)}
                    key={groupName}
                  >
                    {/* <Link to={`/group/${demoGroupID}`} key={groupName}> */}
                    <Image
                      src={
                        logo ||
                        'https://www.hotukdeals.com/assets/img/profile-placeholder_f56af.png'
                      }
                    />
                    <Card.Content>
                      <Card.Header>{groupName}</Card.Header>
                      {/* <Card.Meta>{description}</Card.Meta> */}
                      <Card.Description>{clampedDescription}</Card.Description>
                    </Card.Content>
                    {/* </Link> */}

                    {/* <Card.Content extra>
                      <Button primary>View</Button>
                    </Card.Content> */}
                  </Card>
                );
              })}
            </Card.Group>
          </ListWrap>

          {pagedGroups.length > 1 && (
            <Pagination
              defaultActivePage={currentPage}
              totalPages={pagedGroups.length}
              onPageChange={(e, { activePage }) => {
                setCurrentPage(activePage);
              }}
            />
          )}
        </>
      )}
    </>
  );
};

export default GroupList;
