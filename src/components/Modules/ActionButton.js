// @flow
import React from 'react';
import {
  Image,
  Grid,
  Button,
  Header,
  Container,
} from 'semantic-ui-react';
import styled from 'styled-components/macro';
import { black, white } from '../../config/variables';

const BackgroundBox = styled.div`
    color: ${black};
    background-color: ${white};
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.3);
`;

const ActionButton = ({ title, subTitle, image, buttonText, buttonUrl }) => {
  return (
    <BackgroundBox>
      <Grid columns={1}>
        <Grid.Row style={{ height: '7rem' }}>
          <Grid.Column>
            <Header textAlign="center" as="h3" style={{ color: black, marginTop: '1rem' }}>{title}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Image
              centered
              src={image}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ height: '5rem' }}>
          <Grid.Column>
            <Container textAlign="center">
              {subTitle}
            </Container>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ height: '10rem' }}>
          <Grid.Column>
            <Button
              as="button"
              href={buttonUrl}
              style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', width: '80%', marginBottom: '1rem' }}
            >{buttonText}
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </BackgroundBox>
  );
};

export default ActionButton;
