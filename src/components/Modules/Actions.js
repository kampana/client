// @flow
import React from 'react';
import {
  Grid,
} from 'semantic-ui-react';
import ActionButton from './ActionButton';
import volunteerImage from '../../images/volunteer.svg'; // TODO URI get image
import helpCivicImage from '../../images/help-civic.svg'; // TODO URI get image
import runGroupImage from '../../images/run-group.svg'; // TODO URI get image

const Actions = () => {
  return (
    <Grid columns={3} stackable>
      <Grid.Row>

        <Grid.Column stretched>
          <ActionButton
            image={volunteerImage}
            title="I am a volunteer"
            subTitle="Are you looking to contribute to a project?"
            buttonText="LOOK FOR OPPORTUNITIES"
            buttonUrl="NOWHERE"
          />
        </Grid.Column>
        <Grid.Column stretched>
          <ActionButton
            image={runGroupImage}
            title="I run a group"
            subTitle="Look for volunteers that match the skills you need
          to succeed"
            buttonText="REGISTER MY GROUP"
            buttonUrl="NOWHERE"
          />
        </Grid.Column>
        <Grid.Column stretched>
          <ActionButton
            image={helpCivicImage}
            title="I want to help Civic Tech Hub"
            subTitle="Help Civic Tech Hub in reaching their goals"
            buttonText="HELP CIVIC TECH HUB"
            buttonUrl="NOWHERE"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Actions;
