// @flow
import React, { useState } from 'react';
import { Card, Image, Pagination } from 'semantic-ui-react';
import styled from 'styled-components';

const ListWrap = styled.div`
  min-height: 465px;
  margin-bottom: '2rem';
`;

const GroupList = ({ groupList, handleGroupClicked }) => {
  const [currentPage, setCurrentPage] = useState(1);
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
  const pagedGroups = chunk(Object.values(groupList), PAGE_SIZE);

  return (
    <>
      <ListWrap>
        <Card.Group stackable itemsPerRow="4">
          {pagedGroups[currentPage - 1].map(group => {
            const { name, description, logo } = group;
            let clampedDescription = description;
            const maxChars = 170;
            if (description.length > maxChars) {
              clampedDescription = description.slice(0, maxChars).split(' ');
              clampedDescription.splice(-1, 1);
              clampedDescription = clampedDescription.join(' ').concat('…');
            }

            return (
              <Card onClick={() => handleGroupClicked(group.id)} key={group.id}>
                {/* <Link to={`/group/${demoGroupID}`} key={groupName}> */}
                <Image
                  src={
                    logo ||
                    'https://www.hotukdeals.com/assets/img/profile-placeholder_f56af.png'
                  }
                />
                <Card.Content>
                  <Card.Header>{name}</Card.Header>
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
  );
};

export default GroupList;
